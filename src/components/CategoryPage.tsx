import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function CategoryPage () {
  const { categoryPath } = useParams()
  const [docs, setDocs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        // Replace with your actual PocketBase collection API URL
        const res = await axios.get(
          `https://riatirimba.pockethost.io/api/collections/Policies/records`,
          {
            params: {
              filter: `category="${categoryPath}"`
            }
          }
        )
        console.log('xxx', res)
        setDocs(res.data.items)
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
    window.open(pdfUrl, '_blank')
  }

  if (loading) return <div>Loading...</div>

  return (
    <div className='p-4'>
      <h1 className='text-2xl mb-4 capitalize'>{categoryPath} Documents</h1>
      {docs.length === 0 ? (
        <p>No documents found.</p>
      ) : (
        <ul className='space-y-2'>
          {docs.map(doc => (
            <li
              key={doc.id}
              className='border p-2 rounded'
              onClick={() => handleOpenPDF(doc)}
            >
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
