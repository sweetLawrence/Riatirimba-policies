// import { useState, useEffect } from 'react'
// import Navbar from '../components/Navbar'
// import { useParams } from 'react-router-dom'
// import axios from 'axios'
// import { categories } from '../data/categories'

// export default function CategoryPage () {
//   // const { categoryPath } = useParams()
//   const { categoryPath, quarter } = useParams()

//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const [categoryDocs, setCategoryDocs] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)

//   const matchedCategory = categories.find(cat => cat.path === categoryPath)
//   const displayCategoryName = matchedCategory
//     ? matchedCategory.name
//     : categoryPath

//   // useEffect(() => {
//   //   const fetchDocs = async () => {
//   //     try {
//   //       // const res = await axios.get(
//   //       //   `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//   //       //   { params: { filter: `category="${categoryPath}"` } }
//   //       // )
//   //       const res = await axios.get(
//   //         `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//   //         {
//   //           params: {
//   //             filter: `category="${categoryPath}" && quarter="${quarter}"`
//   //           }
//   //         }
//   //       )

//   //       setCategoryDocs(res.data.items)
//   //     } catch (err) {
//   //       console.error('Failed to fetch:', err)
//   //     } finally {
//   //       setLoading(false)
//   //     }
//   //   }
//   //   fetchDocs()
//   // }, [categoryPath])

//   useEffect(() => {
//   const fetchDocs = async () => {
//     try {
//       const res = await axios.get(
//         `https://riatirimba.pockethost.io/api/collections/Policies/records`,
//         {
//           params: {
//             filter: `category="${categoryPath}" && quarter="${quarter}"`
//           }
//         }
//       );

//       setCategoryDocs(res.data.items);
//     } catch (err) {
//       console.error('Failed to fetch:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchDocs();
// }, [categoryPath, quarter]);  // ✅ Include quarter here


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
//         <h2 className='text-xl text-gray-600 mb-2'>
//           Showing documents for <strong>{displayCategoryName}</strong> -{' '}
//           <strong>{quarter}</strong>
//         </h2>

//         {searchResults.length > 0 ? (
//           <div className='mt-6'>
//             <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
//             <ul className='space-y-4'>
//               {searchResults.map(doc => (
//                 <li
//                   key={doc.id}
//                   onClick={() => handleOpenPDF(doc)}
//                   className='mb-2 bg-white shadow rounded-lg p-4 hover:bg-gray-50 flex flex-col'
//                 >
//                   <div className='x mb-2'>{doc.name}</div>
//                   {/* 📄  */}

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
//           <>
//             <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//               {displayCategoryName}
//             </h2>

//             {loading ? (
//               <p className='text-gray-600'>Loading documents...</p>
//             ) : categoryDocs.length > 0 ? (
//               <ul className='space-y-4'>
//                 {categoryDocs.map(doc => (
//                   <li
//                     key={doc.id}
//                     onClick={() => handleOpenPDF(doc)}
//                     className='bg-white shadow rounded-lg p-4 hover:bg-gray-50 mb-2 flex flex-col'
//                   >
//                     <a
//                       href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                       target='_blank'
//                       rel='noopener noreferrer'
//                       className='text-blue-600 hover:underline m-2'
//                     >
//                       {doc.name}
//                     </a>

//                     <a
//                       href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                       download={doc.name}
//                       onClick={e => e.stopPropagation()} // Prevent triggering the PDF open
//                       className=' bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-[120px] text-center ml-[1%] '
//                     >
//                       Download
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p className='text-gray-600'>
//                 No documents found in this category.
//               </p>
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
              filter: `category="${categoryPath}" && quarter="${quarter}"`
            }
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

  // ---- Helpers to decide which viewer to use ----
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
    <div className='min-h-screen bg-gray-50'>
      <Navbar onSearchResults={setSearchResults} />

      <div className='max-w-4xl mx-auto p-4'>
        <h2 className='text-xl text-gray-600 mb-2'>
          Showing documents for <strong>{displayCategoryName}</strong> -{' '}
          <strong>{quarter}</strong>
        </h2>

        {searchResults.length > 0 ? (
          <div className='mt-6'>
            <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
            <ul className='space-y-4'>
              {searchResults.map(doc => (
                <li
                  key={doc.id}
                  onClick={() => handleOpenFile(doc)}
                  className='mb-2 bg-white shadow rounded-lg p-4 hover:bg-gray-50 flex flex-col cursor-pointer'
                >
                  <div className='x mb-2'>{doc.name}</div>

                  <a
                    href={getFileUrl(doc)}
                    download={doc.name}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
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
                    onClick={() => handleOpenFile(doc)}
                    className='bg-white shadow rounded-lg p-4 hover:bg-gray-50 mb-2 flex flex-col cursor-pointer'
                  >
                    <a
                      href={getFileUrl(doc)}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline m-2'
                      onClick={e => e.preventDefault()} // keep click on li to open with viewer
                    >
                      {doc.name}
                    </a>

                    <a
                      href={getFileUrl(doc)}
                      download={doc.name}
                      onClick={e => e.stopPropagation()}
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
