// import { useState } from 'react'
// import Searchbar from '../components/Searchbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'

// export default function Home () {
//   const [search, setSearch] = useState('')

//   return (
//     <div className='p-4'>
//       <div className='sb'>
//         <Searchbar value={search} onChange={e => setSearch(e.target.value)} />
//       </div>

//       <div className='folders'>
//         {categories.map((cat, i) => (
//           <div className='p'>
//             <Link key={i} to={`/category/${cat.path}`}>
//               {cat.name}
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// import { useState } from 'react'
// import Searchbar from '../components/Searchbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import LOGO from '../assets/logo.png'
// import { Image } from '@mantine/core'

// export default function Home () {
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const [searching, setSearching] = useState(false)

//   const handleSearch = async () => {
//     if (search.trim() === '') return
//     setSearching(true)
//     setSearchResults([])

//     try {
//       const res = await axios.get(
//         'https://riatirimba.pockethost.io/api/collections/Policies/records'
//       )
//       const items = res.data.items

//       // Filter matching documents by name
//       const filtered = items.filter((doc: any) =>
//         doc.name.toLowerCase().includes(search.toLowerCase())
//       )

//       setSearchResults(filtered)
//     } catch (err) {
//       console.error('Search failed:', err)
//     } finally {
//       setSearching(false)
//     }
//   }

//   return (
//     <div className='p-4'>
//       <div className='nav'>
//         <div className='logo'>
//           <Image src={LOGO} />
//         </div>
//         <div className='sb flex gap-2'>
//           <Searchbar value={search} onChange={e => setSearch(e.target.value)} />
//           <button
//             onClick={handleSearch}
//             className='bg-blue-500 text-white px-4 py-2 rounded'
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* If there are search results */}
//       {searching && <div>Searching...</div>}
//       {searchResults.length > 0 && (
//         <div className='mt-4'>
//           <h2 className='text-xl mb-2'>Search Results:</h2>
//           <ul className='space-y-2'>
//             {searchResults.map(doc => (
//               <li key={doc.id} className='border p-2 rounded'>
//                 <a
//                   href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='text-blue-600'
//                 >
//                   {doc.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* Show folders only if no search result */}
//       {searchResults.length === 0 && !searching && (
//         <div className='folders mt-6'>
//           <h2 className='text-xl mb-2'>Categories:</h2>
//           {categories.map((cat, i) => (
//             <div className='p' key={i}>
//               <Link to={`/category/${cat.path}`} className='text-blue-600'>
//                 {cat.name}
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// import { useState } from 'react'
// import Searchbar from '../components/Searchbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import LOGO from '../assets/logo.png'
// import { Image } from '@mantine/core'

// export default function Home () {
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const [searching, setSearching] = useState(false)

//   const handleSearch = async () => {
//     if (search.trim() === '') return
//     setSearching(true)
//     setSearchResults([])

//     try {
//       const res = await axios.get(
//         'https://riatirimba.pockethost.io/api/collections/Policies/records'
//       )
//       const items = res.data.items

//       const filtered = items.filter((doc: any) =>
//         doc.name.toLowerCase().includes(search.toLowerCase())
//       )

//       setSearchResults(filtered)
//     } catch (err) {
//       console.error('Search failed:', err)
//     } finally {
//       setSearching(false)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       {/* Navbar */}
//       <div className='flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md'>
//         <Link to={'/'}>
//           {' '}
//           <div className=''>
//             <Image src={LOGO} className='w-[50px]' />
//           </div>
//         </Link>

//         <div className='flex w-full md:w-auto gap-2 mt-4 md:mt-0'>
//           <Searchbar
//             value={search}
//             // className="flex-1"
//             onChange={e => setSearch(e.target.value)}
//           />
//           <button
//             onClick={handleSearch}
//             className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700'
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div className='max-w-4xl mx-auto p-4'>
//         {/* Search Results */}
//         {searching && (
//           <div className='text-gray-600 mt-4 text-center'>Searching...</div>
//         )}

//         {searchResults.length > 0 && (
//           <div className='mt-6'>
//             <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
//             <ul className='space-y-4'>
//               {searchResults.map(doc => (
//                 <li
//                   key={doc.id}
//                   className='bg-white shadow-sm rounded-lg p-4 hover:bg-gray-50'
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
//         )}

//         {/* Categories */}
//         {searchResults.length === 0 && !searching && (
//           <div className='mt-8'>
//             <h2 className='text-2xl font-semibold mb-6'>
//               Riatirimba TVC Policy Documents & Board Papers Repository
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//               {categories.map((cat, i) => (
//                 <Link
//                   key={i}
//                   to={`/category/${cat.path}`}
//                   className='bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-md hover:bg-gray-50 flex items-center justify-between transition'
//                 >
//                   <span className='text-lg font-medium text-blue-700'>
//                     {cat.name}
//                   </span>
//                   <span className='text-gray-400'>→</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }































// import { useState } from 'react'
// import Searchbar from '../components/Searchbar'
// import { categories } from '../data/categories'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import LOGO from '../assets/logo.png'
// import { Image } from '@mantine/core'
// import { BsFolderFill } from 'react-icons/bs'

// export default function Home() {
//   const [search, setSearch] = useState('')
//   const [searchResults, setSearchResults] = useState<any[]>([])
//   const [searching, setSearching] = useState(false)

//   const handleSearch = async () => {
//     if (search.trim() === '') return
//     setSearching(true)
//     setSearchResults([])

//     try {
//       const res = await axios.get(
//         'https://riatirimba.pockethost.io/api/collections/Policies/records'
//       )
//       const items = res.data.items
//       const filtered = items.filter((doc: any) =>
//         doc.name.toLowerCase().includes(search.toLowerCase())
//       )
//       setSearchResults(filtered)
//     } catch (err) {
//       console.error('Search failed:', err)
//     } finally {
//       setSearching(false)
//     }
//   }

//   return (
//     <div className='min-h-screen bg-gray-50'>
//       {/* Navbar */}
//       <div className='flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow'>
//         <Link to={'/'}>
//           <Image src={LOGO} className='w-[50px]' />
//         </Link>

//         <div className='flex w-full md:w-auto gap-2 mt-4 md:mt-0'>
//           <Searchbar value={search} onChange={e => setSearch(e.target.value)} />
//           <button
//             onClick={handleSearch}
//             className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700'
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       <div className='max-w-4xl mx-auto p-4'>
//         {/* Search Results */}
//         {searching && (
//           <div className='text-gray-600 mt-4 text-center'>Searching...</div>
//         )}

//         {searchResults.length > 0 && (
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
//         )}

//         {/* Categories */}
//         {searchResults.length === 0 && !searching && (
//           <div className='mt-8'>
//             <h2 className='text-2xl font-semibold mb-6 text-gray-800'>
//               Riatirimba TVC Policy Documents & Board Papers Repository
//             </h2>
//             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
//               {categories.map((cat, i) => (
//                 <Link
//                   key={i}
//                   to={`/category/${cat.path}`}
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
//     </div>
//   )
// }



















import { useState } from 'react'
import Navbar from '../components/Navbar'
import { categories } from '../data/categories'
import { Link } from 'react-router-dom'
import { BsFolderFill } from 'react-icons/bs'

export default function Home() {
  const [searchResults, setSearchResults] = useState<any[]>([])

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar onSearchResults={setSearchResults} />

      <div className='max-w-4xl mx-auto p-4'>
        {searchResults.length > 0 ? (
          <div className='mt-6'>
            <h2 className='text-2xl font-semibold mb-4'>Search Results:</h2>
            {/* <ul className='space-y-4'> */}
              {searchResults.map(doc => (
                <div
                  key={doc.id}
                  className='mb-5 bg-white shadow rounded-lg p-4 hover:bg-gray-50'
                >
                  <a
                    href={`https://riatirimba.pockethost.io/api/files/Policies/${doc.id}/${doc.policydoc}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 hover:underline'
                  >
                    <div className="x">📄{doc.name}</div>
                    

                  </a>
                </div>
             
              ))}
            {/* </ul> */}
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
    </div>
  )
}
