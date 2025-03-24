// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// export default function CategoryPage () {
//   const { categoryPath } = useParams()
//   const [docs, setDocs] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         // Replace with your actual PocketBase collection API URL
//         const res = await axios.get(
//           `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//           {
//             params: {
//               filter: `category="${categoryPath}"`
//             }
//           }
//         )
//         console.log('xxx', res)
//         setDocs(res.data.items)
//       } catch (err) {
//         console.error('Failed to fetch:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchDocs()
//   }, [categoryPath])

//   const handleOpenPDF = (doc: any) => {

//     const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
//     window.open(pdfUrl, '_blank')
//   }

//   if (loading) return <div>Loading...</div>

//   return (
//     <div className='p-4'>
//       <h1 className='text-2xl mb-4 capitalize'>{categoryPath} Documents</h1>
//       {docs.length === 0 ? (
//         <p>No documents found.</p>
//       ) : (
//         <ul className='space-y-2'>
//           {docs.map(doc => (
//             <li
//               key={doc.id}
//               className='border p-2 rounded'
//               onClick={() => handleOpenPDF(doc)}
//             >
//               {doc.name}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// import { Link, useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { AiFillFilePdf } from 'react-icons/ai'
// import Searchbar from './Searchbar'
// import { Image } from '@mantine/core'
// // import LOGO from '../assets/logo.png'

// export default function CategoryPage() {
//   const { categoryPath } = useParams()
//   const [docs, setDocs] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(
//           `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//           {
//             params: {
//               filter: `category="${categoryPath}"`
//             }
//           }
//         )
//         console.log('Fetched:', res)
//         setDocs(res.data.items)
//       } catch (err) {
//         console.error('Failed to fetch:', err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchDocs()
//   }, [categoryPath])

// const handleOpenPDF = (doc:any) => {
//     const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`;
//     const googleViewer = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`;
//     window.open(googleViewer, '_blank');
//   };

//   if (loading) return <div className="p-4 text-gray-500">Loading documents...</div>

//   return (
//     <div className="p-4 max-w-4xl mx-auto">

//       <h1 className="text-2xl md:text-3xl font-semibold mb-6 capitalize text-blue-800 border-b pb-2">
//         {categoryPath} Documents
//       </h1>

//       {docs.length === 0 ? (
//         <p className="text-gray-600">No documents found in this category.</p>
//       ) : (
//         <ul className="space-y-4">
//           {docs.map((doc) => (
//             <li
//               key={doc.id}
//               onClick={() => handleOpenPDF(doc)}
//               className="flex items-center gap-4 border hover:bg-blue-50 transition cursor-pointer p-4 rounded shadow-sm"
//             >
//               <AiFillFilePdf className="text-red-600 text-3xl" />
//               <span className="text-gray-800 font-medium">{doc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { AiFillFilePdf } from 'react-icons/ai'

// export default function CategoryPage() {
//   const { categoryPath } = useParams()
//   const [docs, setDocs] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(
//           `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//           { params: { filter: `category="${categoryPath}"` } }
//         )
//         setDocs(res.data.items)
//       } catch (err) {
//         console.error('Failed to fetch:', err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchDocs()
//   }, [categoryPath])

//   const handleOpenPDF = (doc: any) => {
//     const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
//     const googleViewer = `https://docs.google.com/gview?url=${encodeURIComponent(pdfUrl)}&embedded=true`
//     window.open(googleViewer, '_blank')
//   }

//   if (loading) return <div className="p-4 text-gray-500">Loading documents...</div>

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <h1 className="text-2xl md:text-3xl font-semibold mb-6 capitalize text-blue-800">
//         {categoryPath} Documents
//       </h1>

//       {docs.length === 0 ? (
//         <p className="text-gray-600">No documents found in this category.</p>
//       ) : (
//         <ul className="space-y-4">
//           {docs.map((doc) => (
//             <li
//               key={doc.id}
//               onClick={() => handleOpenPDF(doc)}
//               className="flex items-center gap-4 bg-white hover:bg-blue-50 hover:shadow-md transition cursor-pointer p-4 rounded-lg"
//             >
//               <AiFillFilePdf className="text-blue-600 text-3xl" />
//               <span className="text-gray-800 font-medium">{doc.name}</span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { useParams } from 'react-router-dom'

// export default function CategoryPage() {
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const { category } = useParams()

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <Navbar onSearchResults={setSearchResults} />

//       <div className='max-w-4xl mx-auto p-4'>
//         {searchResults.length > 0 ? (
//           <div className='mt-6'>
//             <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
//             <ul className='space-y-4'>
//               {searchResults.map(doc => (
//                 <li
//                   key={doc.id}
//                   className='bg-white shadow rounded-lg p-4 hover:bg-gray-50'
//                 >
//                   <a
//                     href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     className='text-blue-600 hover:underline'
//                   >
//                     📄 {doc.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//             Category: {category}
//           </h2>
//         )}
//       </div>
//     </div>
//   )
// }

// import { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'

// export default function CategoryPage() {
//     const { categoryPath } = useParams()
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const [categoryDocs, setCategoryDocs] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(
//           `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//           { params: { filter: `category="${categoryPath}"` } }
//         )
//         console.log("sdsdsds",res)
//         console.log('Category from URL:', categoryPath)
//         setCategoryDocs(res.data.items)
//       } catch (err) {
//         console.error('Failed to fetch:', err)
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchDocs()
//   }, [categoryPath])

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <Navbar onSearchResults={setSearchResults} />

//       <div className='max-w-4xl mx-auto p-4'>
//         {searchResults.length > 0 ? (
//           <div className='mt-6'>
//             <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
//             <ul className='space-y-4'>
//               {searchResults.map(doc => (
//                 <li
//                   key={doc.id}
//                   className='mb-2 bg-white shado rounded-lg p-4 hover:bg-gray-50'
//                 >
//                   <a
//                     href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     className='text-blue-600 hover:underline font-semibold'
//                   >
//                     📄 {doc.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <>
//             <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//               Category: {categoryPath}
//             </h2>

//             {loading ? (
//               <p className="text-gray-600">Loading documents...</p>
//             ) : categoryDocs.length > 0 ? (
//               <ul className='space-y-4'>
//                 {categoryDocs.map(doc => (
//                   <li
//                     key={doc.id}
//                     className='bg-white shadow rounded-lg p-4 hover:bg-gray-50'
//                   >
//                     <a
//                       href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                       className='text-blue-600 hover:underline'
//                     >
//                       📄 {doc.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className="text-gray-600">No documents found in this category.</p>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

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
                      {/* 📄  */}
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
