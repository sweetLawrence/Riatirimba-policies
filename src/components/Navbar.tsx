import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Searchbar from './Searchbar'
import { Image } from '@mantine/core'
import LOGO from '../assets/logo.png'
import axios from 'axios'

interface NavbarProps {
  onSearchResults: (results: any[]) => void
}

export default function Navbar ({ onSearchResults }: NavbarProps) {
  const [search, setSearch] = useState('')
  const [searching, setSearching] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
   const { quarter } = useParams() 
  const navigate = useNavigate()

  const handleSearch = async () => {
    if (search.trim() === '') return
    setSearching(true)
    onSearchResults([])
    setHasSearched(true)

    try {
      const res = await axios.get(
        'https://riatirimba.pockethost.io/api/collections/Policies/records'
      )
      const items = res.data.items

      // const filtered = items.filter((doc: any) =>
      //   doc.name.toLowerCase().includes(search.toLowerCase())
      // )
      const filtered = items
  .filter((doc: any) =>
    doc.name.toLowerCase().includes(search.toLowerCase()) &&
    doc.quarter === quarter  // ✅ Only include matching quarter
  )

      .map((doc: any) => ({
          ...doc,
          name: `${doc.name} - ${quarter || 'Q?'}`  // 👈 Append quarter
        }))

      onSearchResults(filtered)
    } catch (err) {
      console.error('Search failed:', err)
    } finally {
      setSearching(false)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (hasSearched) {

      window.location.href = '/'
    } else {
      navigate('/')
    }
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow'>
      <a href='/' onClick={handleLogoClick}>
        <Image src={LOGO} className='w-[50px] cursor-pointer' />
      </a>

      <div className='flex w-full md:w-auto gap-2 mt-4 md:mt-0 items-center'>
        <Searchbar value={search} 
         onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        onChange={e => setSearch(e.target.value)} />

        <button
          onClick={handleSearch}
          className={`px-5 py-2 rounded-lg ${
            searching
              ? 'bg-gray-400'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
          disabled={searching}
        >
          {searching ? 'Searching...' : 'Search'}
        </button>
      </div>
    </div>
  )
}
