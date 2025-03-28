import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { categories } from '../data/categories'

export default function CategoryPage () {
  const { categoryPath } = useParams()
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
          { params: { filter: `category="${categoryPath}"` } }
        )
        setCategoryDocs(res.data.items)
      } catch (err) {
        console.error('Failed to fetch:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchDocs()
  }, [categoryPath])

  const handleOpenPDF = (doc: any) => {
    const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
    const googleViewer = `https://docs.google.com/gview?url=${encodeURIComponent(
      pdfUrl
    )}&embedded=true`
    window.open(googleViewer, '_blank')
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar onSearchResults={setSearchResults} />

      <div className='max-w-4xl mx-auto p-4'>
        {searchResults.length > 0 ? (
          <div className='mt-6'>
            <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
            <ul className='space-y-4'>
              {searchResults.map(doc => (
                <li
                  key={doc.id}
                  onClick={() => handleOpenPDF(doc)}
                   
                  className='mb-2 bg-white shadow rounded-lg p-4 hover:bg-gray-50 flex flex-col'
                >
                  <div className='x mb-2'>{doc.name}</div>
                  {/* 📄  */}
                  
                  <a
                    href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
                    download={doc.name}
                    target="_blank"
                    onClick={e => e.stopPropagation()} // Prevent triggering the PDF open
                    className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[120px] text-center'
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
            {displayCategoryName}
            </h2>

            {loading ? (
              <p className='text-gray-600'>Loading documents...</p>
            ) : categoryDocs.length > 0 ? (
              <ul className='space-y-4'>
                {categoryDocs.map(doc => (
                  <li
                    key={doc.id}
                    onClick={() => handleOpenPDF(doc)}
                    className='bg-white shadow rounded-lg p-4 hover:bg-gray-50 mb-2 flex flex-col'
                  >
                    <a
                      href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline m-2'
                    >
                      {doc.name}
                      
                    </a>

                    <a
                      href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
                      download={doc.name}
                      onClick={e => e.stopPropagation()} // Prevent triggering the PDF open
                      className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[120px] text-center ml-[1%] '
                    >
                      Download
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-600'>
                No documents found in this category.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  )
}
