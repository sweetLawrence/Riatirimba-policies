import { Link } from 'react-router-dom'
import { BsFolderFill } from 'react-icons/bs'
import { Image } from '@mantine/core'
import { motion } from 'framer-motion'
import LOGO from '../assets/logo.png'

export default function FinancialYearSelector() {
  const years = [
    '2024-2025',
    '2025-2026'
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">

      <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-blue-300 blur-3xl opacity-40" />
      <div className="absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-indigo-300 blur-3xl opacity-40" />

      <header className="backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Image
            src={LOGO}
            alt="Logo"
            className="w-[40px] h-[40px]"
          />

          <h1 className="text-xl font-semibold text-blue-900">
            Riatirimba Docs & Policies
          </h1>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center py-20 px-6">

        <motion.h1
          className="text-4xl font-bold text-blue-900 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Select Financial Year
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">

          {years.map((year, index) => (

            <motion.div
              key={year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
            >

              <Link
                to={`/fy/${year}`}
                className="group block rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-lg p-6 hover:scale-[1.03] transition"
              >

                <div className="p-3 w-fit rounded-xl bg-yellow-400 text-white">
                  <BsFolderFill className="text-2xl" />
                </div>

                <h2 className="mt-4 text-xl font-semibold text-blue-900">
                  {year}
                </h2>

                <p className="text-gray-500 mt-2">
                  Board & Committee Documents
                </p>

              </Link>

            </motion.div>

          ))}

          <Link
            to="/home/Policies"
            className="group rounded-2xl bg-white/70 border border-white shadow-lg p-6"
          >
            <div className="p-3 w-fit rounded-xl bg-green-500 text-white">
              <BsFolderFill className="text-2xl" />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-blue-900">
              Policies & Strategic Plans
            </h2>

          </Link>

          <Link
            to="/home/MOU"
            className="group rounded-2xl bg-white/70 border border-white shadow-lg p-6"
          >
            <div className="p-3 w-fit rounded-xl bg-purple-500 text-white">
              <BsFolderFill className="text-2xl" />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-blue-900">
              MOUs
            </h2>

          </Link>

        </div>

      </main>

    </div>
  )
}