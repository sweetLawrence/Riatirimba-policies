// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { useMediaQuery } from '@mantine/hooks'
// // import { IconArrowDown } from "@tabler/icons-react";
// import { FiArrowDown } from 'react-icons/fi';
// import { useParams } from 'react-router-dom'
// // import { useEffect } from 'react'

// export default function Home () {
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const isMobile = useMediaQuery('(max-width: 768px)')

//   const { quarter } = useParams()

//   const handleScrollDown = () => {
//     window.scrollBy({ top: 250, behavior: 'smooth' })
//   }

//   const handleOpenPDF = (doc: any) => {
//     const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
//     const googleViewer = `https://docs.google.com/gview?url=${encodeURIComponent(
//       pdfUrl
//     )}&embedded=true`
//     window.open(googleViewer, '_blank')
//   }

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
//                   onClick={() => handleOpenPDF(doc)}
//                   className='mb-5 bg-white shadow rounded-lg p-4 hover:bg-gray-50'
//                 >
//                   <div className='x mb-3.5'>{doc.name}</div>

//                   <a
//                     href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                     download={doc.name}
//                     target='_blank'
//                     onClick={e => e.stopPropagation()} // Prevent triggering the PDF open
//                     className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[120px] text-center'
//                   >
//                     Download
//                   </a>

//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div className='mt-8'>
//             <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//               Riatirimba TVC Policy Documents & Board Papers Repository
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//               {categories.map((cat, i) => (
//                 <Link
//                   key={i}
//                   // to={`/category/${cat.path}`}
//                   to={`/category/${quarter}/${cat.path}`}
//                   className='bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-4'
//                 >
//                   <BsFolderFill className='text-yellow-500 text-3xl' />
//                   <span className='text-lg font-medium text-blue-800'>
//                     {cat.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       {isMobile && (
//         <button
//           onClick={handleScrollDown}
//           className='w-[60px] h-[60px] flex items-center justify-center text-white bg-blue-800 rounded-full font-bold fixed right-5 bottom-5'

//         >

//           {/* <IconArrowDown /> */}
//           <FiArrowDown size={24} />

//         </button>
//       )}
//     </div>
//   )
// }

// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { useMediaQuery } from '@mantine/hooks'
// import { FiArrowDown } from 'react-icons/fi'
// import { useParams } from 'react-router-dom'

// export default function Home () {
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const isMobile = useMediaQuery('(max-width: 768px)')

//   const { quarter } = useParams()

//   const handleScrollDown = () => {
//     window.scrollBy({ top: 250, behavior: 'smooth' })
//   }

//   // ---- Helpers to decide which viewer to use ----
//   const officeExts = ['xls', 'xlsx', 'csv', 'doc', 'docx', 'ppt', 'pptx']
//   const googleExts = ['pdf']

//   const getExt = (filename: string = '') => {
//     const parts = filename.split('.')
//     return parts.length > 1 ? parts.pop()!.toLowerCase() : ''
//   }

//   const getFileUrl = (doc: any) =>
//     `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`

//   const buildViewerUrl = (fileUrl: string) => {
//     const ext = getExt(fileUrl)

//     if (googleExts.includes(ext)) {
//       return `https://docs.google.com/gview?url=${encodeURIComponent(
//         fileUrl
//       )}&embedded=true`
//     }

//     if (officeExts.includes(ext)) {
//       return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
//         fileUrl
//       )}`
//     }

//     return fileUrl
//   }

//   const handleOpenFile = (doc: any) => {
//     const fileUrl = getFileUrl(doc)
//     const viewerUrl = buildViewerUrl(fileUrl)
//     window.open(viewerUrl, '_blank')
//   }

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
//                   onClick={() => handleOpenFile(doc)}
//                   className='mb-5 bg-white shadow rounded-lg p-4 hover:bg-gray-50 cursor-pointer'
//                 >
//                   <div className='x mb-3.5'>{doc.name}</div>

//                   <a
//                     href={getFileUrl(doc)}
//                     download={doc.name}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     onClick={e => e.stopPropagation()} // Prevent triggering the viewer open
//                     className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[120px] text-center'
//                   >
//                     Download
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div className='mt-8'>
//             <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//               Riatirimba TVC Policy Documents & Board Papers Repository
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//               {categories.map((cat, i) => (
//                 <Link
//                   key={i}
//                   to={`/category/${quarter}/${cat.path}`}
//                   className='bg-white shadow rounded-xl p-6 hover:shadow-lg hover:scale-[1.02] transition-all flex items-center gap-4'
//                 >
//                   <BsFolderFill className='text-yellow-500 text-3xl' />
//                   <span className='text-lg font-medium text-blue-800'>
//                     {cat.name}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       {isMobile && (
//         <button
//           onClick={handleScrollDown}
//           className='w-[60px] h-[60px] flex items-center justify-center text-white bg-blue-800 rounded-full font-bold fixed right-5 bottom-5'
//         >
//           <FiArrowDown size={24} />
//         </button>
//       )}
//     </div>
//   )
// }

// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import { categories } from '../data/categories'
// import { Link, useParams } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { useMediaQuery } from '@mantine/hooks'
// import { FiArrowDown } from 'react-icons/fi'

// export default function Home() {
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const isMobile = useMediaQuery('(max-width: 768px)')
//   const { quarter } = useParams()

//   const handleScrollDown = () => {
//     window.scrollBy({ top: 250, behavior: 'smooth' })
//   }

//   // ---- Helpers ----
//   const officeExts = ['xls', 'xlsx', 'csv', 'doc', 'docx', 'ppt', 'pptx']
//   const googleExts = ['pdf']

//   const getExt = (filename: string = '') => {
//     const parts = filename.split('.')
//     return parts.length > 1 ? parts.pop()!.toLowerCase() : ''
//   }

//   const getFileUrl = (doc: any) =>
//     `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`

//   const buildViewerUrl = (fileUrl: string) => {
//     const ext = getExt(fileUrl)
//     if (googleExts.includes(ext)) {
//       return `https://docs.google.com/gview?url=${encodeURIComponent(
//         fileUrl
//       )}&embedded=true`
//     }
//     if (officeExts.includes(ext)) {
//       return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
//         fileUrl
//       )}`
//     }
//     return fileUrl
//   }

//   const handleOpenFile = (doc: any) => {
//     const fileUrl = getFileUrl(doc)
//     const viewerUrl = buildViewerUrl(fileUrl)
//     window.open(viewerUrl, '_blank')
//   }

//   return (
//     <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden'>
//       {/* Floating gradient blobs */}
//       <div className='absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-blue-300 blur-3xl opacity-40'></div>
//       <div className='absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-indigo-300 blur-3xl opacity-40'></div>

//       {/* Navbar */}
//       <Navbar onSearchResults={setSearchResults} />

//       <div className='relative max-w-5xl mx-auto px-4 py-12'>
//         {searchResults.length > 0 ? (
//           <div className='mt-6'>
//             <h2 className='text-3xl font-bold mb-6 text-blue-900 tracking-tight'>
//               Search Results
//             </h2>

//             <ul className='space-y-5'>
//               {searchResults.map(doc => (
//                 <li
//                   key={doc.id}
//                   onClick={() => handleOpenFile(doc)}
//                   className='cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-5 rounded-2xl'
//                 >
//                   <div className='text-lg font-medium text-gray-800 mb-4'>
//                     {doc.name}
//                   </div>

//                   <a
//                     href={getFileUrl(doc)}
//                     download={doc.name}
//                     target='_blank'
//                     rel='noopener noreferrer'
//                     onClick={e => e.stopPropagation()}
//                     className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
//                   >
//                     Download
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           <div className='mt-12'>
//             <h2 className='text-3xl font-extrabold mb-8 text-blue-900 text-center'>
//               Riatirimba TVC Policy Documents & Board Papers Repository
//             </h2>

//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
//               {categories.map((cat, i) => (
//                 <Link
//                   key={i}
//                   to={`/category/${quarter}/${cat.path}`}
//                   className='relative bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 p-6 rounded-2xl flex items-center gap-4 group'
//                 >
//                   <div className='p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md'>
//                     <BsFolderFill className='text-2xl' />
//                   </div>
//                   <span className='text-lg font-semibold text-blue-900 group-hover:text-indigo-700 transition-colors'>
//                     {cat.name}
//                   </span>
//                   <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300' />
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {isMobile && (
//         <button
//           onClick={handleScrollDown}
//           className='w-[60px] h-[60px] flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-indigo-600 shadow-lg rounded-full font-bold fixed right-5 bottom-5 hover:scale-110 transition-transform'
//         >
//           <FiArrowDown size={26} />
//         </button>
//       )}
//     </div>
//   )
// }

import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../data/categories'
import { Link, useParams } from 'react-router-dom'
import { BsFolderFill } from 'react-icons/bs'
import { useMediaQuery } from '@mantine/hooks'
import { FiArrowDown } from 'react-icons/fi'
import axios from 'axios'

export default function Home () {
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [mouDocs, setMouDocs] = useState<any[]>([])

  const [policiesDocs, setPoliciesDocs] = useState<any[]>([])

  const [loading, setLoading] = useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { quarter } = useParams()

  const handleScrollDown = () => {
    window.scrollBy({ top: 250, behavior: 'smooth' })
  }

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

  // const handleOpenFile = (doc: any) => {
  //   const fileUrl = getFileUrl(doc)
  //   const viewerUrl = buildViewerUrl(fileUrl)
  //   window.open(viewerUrl, '_blank')
  // }

  const handleOpenFile = (doc: any) => {
  if (quarter === 'Policies') {
    window.open('https://policies.riatirimbatvc.ac.ke/', '_blank')
    return
  }

  const fileUrl = getFileUrl(doc)
  const viewerUrl = buildViewerUrl(fileUrl)
  window.open(viewerUrl, '_blank')
}


  // ---- Fetch MOU documents when quarter === "MOU" ----
  useEffect(() => {
    if (quarter === 'MOU') {
      const fetchMouDocs = async () => {
        setLoading(true)
        try {
          const res = await axios.get(
            `https://riatirimba.pockethost.io/api/collections/Policies/records`,
            {
              params: {
                filter: `category="MOU"`
              }
            }
          )
          setMouDocs(res.data.items)
        } catch (err) {
          console.error('Failed to fetch MOU docs:', err)
        } finally {
          setLoading(false)
        }
      }

      fetchMouDocs()
    }

    if (quarter === 'Policies') {
      const fetchPoliciesDocs = async () => {
        setLoading(true)
        try {
          const res = await axios.get(
            `https://riatirimba.pockethost.io/api/collections/Policies/records`,
            {
              params: {
                filter: `category="Policies"`
              }
            }
          )
          setPoliciesDocs(res.data.items)
        } catch (err) {
          console.error('Failed to fetch Policies docs:', err)
        } finally {
          setLoading(false)
        }
      }

      fetchPoliciesDocs()
    }
  }, [quarter])

  return (
    <div className='relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden'>
      {/* Floating gradient blobs */}
      <div className='absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-blue-300 blur-3xl opacity-40'></div>
      <div className='absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-indigo-300 blur-3xl opacity-40'></div>

      {/* Navbar */}
      <Navbar onSearchResults={setSearchResults} />

      <div className='relative max-w-5xl mx-auto px-4 py-12'>
        {searchResults.length > 0 ? (
          <div className='mt-6'>
            <h2 className='text-3xl font-bold mb-6 text-blue-900 tracking-tight'>
              Search Results
            </h2>

            <ul className='space-y-5'>
              {searchResults.map(doc => (
                <li
                  key={doc.id}
                  onClick={() => handleOpenFile(doc)}
                  className='cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] p-5 rounded-2xl'
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
        ) : quarter === 'MOU' ? (
          <div className='mt-12'>
            <h2 className='text-3xl font-extrabold mb-8 text-blue-900 text-center'>
              MOU & Policy Documents
            </h2>

            {loading ? (
              <div className='flex justify-center items-center mt-12'>
                <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600'></div>
                <span className='ml-4 text-gray-600 text-lg'>
                  Loading documents...
                </span>
              </div>
            ) : mouDocs.length > 0 ? (
              <ul className='space-y-5'>
                {mouDocs.map(doc => (
                  <li
                    key={doc.id}
                    onClick={() => handleOpenFile(doc)}
                    className='cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 rounded-2xl'
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
                No MOU or policy documents found.
              </p>
            )}
          </div>
        ) : quarter === 'Policies' ? (
          <div className='mt-12'>
            <h2 className='text-3xl font-extrabold mb-8 text-blue-900 text-center'>
              Policies and Strategic Plan
            </h2>

            {loading ? (
              <div className='flex justify-center items-center mt-12'>
                <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600'></div>
                <span className='ml-4 text-gray-600 text-lg'>
                  Loading documents...
                </span>
              </div>
            ) : policiesDocs.length > 0 ? (
              <ul className='space-y-5'>
                {policiesDocs.map(doc => (
                  <li
                    key={doc.id}
                    onClick={() => handleOpenFile(doc)}
                    className='cursor-pointer bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-5 rounded-2xl'
                  >
                    <div className='text-lg font-medium text-gray-800 mb-4'>
                      {doc.name}
                    </div>

                    <div className='flex items-center gap-4'>
                      <a
                        // href={getFileUrl(doc)}
                        href='https://policies.riatirimbatvc.ac.ke/'
                        target='_blank'
                        rel='noopener noreferrer'
                        // onClick={e => e.preventDefault()}
                        onClick={e => {
                          e.stopPropagation() // 👈 stops parent onClick
                        }}
                        className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
                      >
                        View
                      </a>
                      {/* <a
                        href={getFileUrl(doc)}
                        download={doc.name}
                        onClick={e => e.stopPropagation()}
                        className='inline-block bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-600 transition-all shadow-md'
                      >
                        Download
                      </a> */}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='text-gray-600 text-center text-lg mt-10'>
                No Policies & Strategic plan documents found.
              </p>
            )}
          </div>
        ) : (
          <div className='mt-12'>
            <h2 className='text-3xl font-extrabold mb-8 text-blue-900 text-center'>
              Riatirimba TVC Policy Documents & Board Papers Repository
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`/category/${quarter}/${cat.path}`}
                  className='relative bg-white/70 backdrop-blur-md border border-white/40 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 p-6 rounded-2xl flex items-center gap-4 group'
                >
                  <div className='p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md'>
                    <BsFolderFill className='text-2xl' />
                  </div>
                  <span className='text-lg font-semibold text-blue-900 group-hover:text-indigo-700 transition-colors'>
                    {cat.name}
                  </span>
                  <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300' />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {isMobile && (
        <button
          onClick={handleScrollDown}
          className='w-[60px] h-[60px] flex items-center justify-center text-white bg-gradient-to-br from-blue-700 to-indigo-600 shadow-lg rounded-full font-bold fixed right-5 bottom-5 hover:scale-110 transition-transform'
        >
          <FiArrowDown size={26} />
        </button>
      )}
    </div>
  )
}
