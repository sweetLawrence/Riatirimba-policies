import { useState } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../data/categories'
import { Link } from 'react-router-dom'
import { BsFolderFill } from 'react-icons/bs'
import { useMediaQuery } from '@mantine/hooks'
import { IconArrowDown } from "@tabler/icons-react";

export default function Home () {
  const [searchResults, setSearchResults] = useState<any[]>([])
  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleScrollDown = () => {
    window.scrollBy({ top: 250, behavior: 'smooth' })
  }

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
                  className='mb-5 bg-white shadow rounded-lg p-4 hover:bg-gray-50'
                >
                  <div className='x mb-3.5'>{doc.name}</div>
                 
                  <a
                    href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
                    download={doc.name}
                    target='_blank'
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
          <div className='mt-8'>
            <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
              Riatirimba TVC Policy Documents & Board Papers Repository
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${cat.path}`}
                  className='bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-4'
                >
                  <BsFolderFill className='text-yellow-500 text-3xl' />
                  <span className='text-lg font-medium text-blue-800'>
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <button
          onClick={handleScrollDown}
          className='w-[60px] h-[60px] flex items-center justify-center text-white bg-blue-800 rounded-full font-bold fixed right-5 bottom-5'
         
        >
  
          <IconArrowDown />
        </button>
      )}
    </div>
  )
}
