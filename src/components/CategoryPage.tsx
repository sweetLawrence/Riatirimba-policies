import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { categories } from '../data/categories'

export default function CategoryPage() {
  const { categoryPath, quarter } = useParams()
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [categoryDocs, setCategoryDocs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const matchedCategory = categories.find(cat => cat.path === categoryPath)
  const displayCategoryName = matchedCategory
    ? matchedCategory.name
    : categoryPath

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get(
          `https://riatirimba.pockethost.io/api/collections/Policies/records`,
          {
            params: {
              filter: `category="${categoryPath}" && quarter="${quarter}"`,
            },
          }
        )
        setCategoryDocs(res.data.items)
      } catch (err) {
        console.error('Failed to fetch:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [categoryPath, quarter])

  // ---- Helpers ----
  const officeExts = ['xls', 'xlsx', 'csv', 'doc', 'docx', 'ppt', 'pptx']
  const googleExts = ['pdf']

  const getExt = (filename: string = '') => {
    const parts = filename.split('.')
    return parts.length > 1 ? parts.pop()!.toLowerCase() : ''
  }

  const getFileUrl = (doc: any) =>
    `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`

  const buildViewerUrl = (fileUrl: string) => {
    const ext = getExt(fileUrl)
    if (googleExts.includes(ext)) {
      return `https://docs.google.com/gview?url=${encodeURIComponent(
        fileUrl
      )}&embedded=true`
    }
    if (officeExts.includes(ext)) {
      return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
        fileUrl
      )}`
    }
    return fileUrl
  }

  const handleOpenFile = (doc: any) => {
    const fileUrl = getFileUrl(doc)
    const viewerUrl = buildViewerUrl(fileUrl)
    window.open(viewerUrl, '_blank')
  }

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden'>
      {/* Floating blurred gradients */}
      <div className='absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-blue-300 blur-3xl opacity-40'></div>
      <div className='absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-indigo-300 blur-3xl opacity-40'></div>

      {/* Navbar */}
      <Navbar onSearchResults={setSearchResults} />

      <div className='relative max-w-5xl mx-auto px-4 py-12'>
        <h2 className='text-3xl font-extrabold text-blue-900 mb-3 tracking-tight'>
          {displayCategoryName}
        </h2>
        <p className='text-gray-600 mb-8 text-lg'>
          Showing documents for <strong>{displayCategoryName}</strong> —{' '}
          <strong>{quarter}</strong>
        </p>

        {searchResults.length > 0 ? (
          <div>
            <h3 className='text-2xl font-semibold mb-6 text-blue-900'>
              Search Results
            </h3>
            <ul className='space-y-5'>
              {searchResults.map(doc => (
                <li
                  key={doc.id}
                  onClick={() => handleOpenFile(doc)}
                  className='cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 rounded-2xl'
                >
                  <div className='text-lg font-medium text-gray-800 mb-4'>
                    {doc.name}
                  </div>

                  <a
                    href={getFileUrl(doc)}
                    download={doc.name}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                    className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : loading ? (
          <div className='flex justify-center items-center mt-12'>
            <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600'></div>
            <span className='ml-4 text-gray-600 text-lg'>
              Loading documents...
            </span>
          </div>
        ) : categoryDocs.length > 0 ? (
          <ul className='space-y-5'>
            {categoryDocs.map(doc => (
              <li
                key={doc.id}
                onClick={() => handleOpenFile(doc)}
                className='mb-4 cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 rounded-2xl'
              >
                <div className='text-lg font-medium text-gray-800 mb-4'>
                  {doc.name}
                </div>

                <div className='flex items-center gap-4'>
                  <a
                    href={getFileUrl(doc)}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.preventDefault()}
                    // className='text-blue-700 hover:underline text-base'
                    className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
                  >
                    View
                  </a>
                  <a
                    href={getFileUrl(doc)}
                    download={doc.name}
                    onClick={e => e.stopPropagation()}
                    className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
                  >
                    Download
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-gray-600 text-center text-lg mt-10'>
            No documents found in this category.
          </p>
        )}
      </div>
    </div>
  )
}
