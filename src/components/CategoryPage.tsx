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






import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AiFillFilePdf } from 'react-icons/ai'

export default function CategoryPage() {
  const { categoryPath } = useParams()
  const [docs, setDocs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get(
          `https://riatirimba.pockethost.io/api/collections/Policies/records`,
          {
            params: {
              filter: `category="${categoryPath}"`
            }
          }
        )
        console.log('Fetched:', res)
        setDocs(res.data.items)
      } catch (err) {
        console.error('Failed to fetch:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchDocs()
  }, [categoryPath])

//   const handleOpenPDF = (doc: any) => {
//     const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
//     window.open(pdfUrl, '_blank')
//   }

const handleOpenPDF = (doc:any) => {
    const pdfUrl = `https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`
    const googleViewer = `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
    window.open(googleViewer, '_blank')
  }

  

  if (loading) return <div className="p-4 text-gray-500">Loading documents...</div>

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 capitalize text-blue-800 border-b pb-2">
        {categoryPath} Documents
      </h1>

      {docs.length === 0 ? (
        <p className="text-gray-600">No documents found in this category.</p>
      ) : (
        <ul className="space-y-4">
          {docs.map((doc) => (
            <li
              key={doc.id}
              onClick={() => handleOpenPDF(doc)}
              className="flex items-center gap-4 border hover:bg-blue-50 transition cursor-pointer p-4 rounded shadow-sm"
            >
              <AiFillFilePdf className="text-red-600 text-3xl" />
              <span className="text-gray-800 font-medium">{doc.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

