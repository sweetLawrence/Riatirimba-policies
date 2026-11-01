// import { Link, useParams } from 'react-router-dom'
// import { BsFolderFill, BsArrowLeft } from 'react-icons/bs'
// import { Image } from '@mantine/core'
// import { motion } from 'framer-motion'
// import LOGO from '../assets/logo.png'

// export default function QuarterSelector () {
//   const { year } = useParams()

//   const financialYears: Record<string, string[]> = {
//     '2024-2025': ['2024-2025.Q3', '2024-2025.Q4'],

//     '2025-2026': [
//       '2025-2026.Q1',
//       '2025-2026.Q2',
//       '2025-2026.Q3',
//       '2025-2026.Q4'
//     ],

//     '2026-2027': [
//       '2026-2027.Q1',
//       // '2026-2027.Q2',
//       // '2026-2027.Q3',
//       // '2026-2027.Q4'
//     ]
//   }

//   const displayLabels: Record<string, string> = {
//     '2024-2025.Q3': '3rd Quarter',
//     '2024-2025.Q4': '4th Quarter',

//     '2025-2026.Q1': '1st Quarter',
//     '2025-2026.Q2': '2nd Quarter',
//     '2025-2026.Q3': '3rd Quarter',
//     '2025-2026.Q4': '4th Quarter',

//     '2026-2027.Q1': '1st Quarter',
//     // '2026-2027.Q2': '2nd Quarter',
//     // '2026-2027.Q3': '3rd Quarter',
//     // '2026-2027.Q4': '4th Quarter'
//   }

//   const quarters = financialYears[year || ''] || []

//   return (
//     <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
//       {/* Background blobs */}
//       <div className='absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl' />
//       <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl' />

//       {/* Header */}
//       <header className='sticky top-0 z-20 bg-white/60 backdrop-blur-2xl shadow-sm'>
//         <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
//           <div className='flex items-center gap-4'>
//             <Image src={LOGO} alt='Logo' className='w-10 h-10' />

//             <div>
//               <h1 className='text-xl font-semibold text-slate-800'>
//                 Riatirimba Docs & Policies
//               </h1>

//               <p className='text-sm text-slate-500'>Financial Year {year}</p>
//             </div>
//           </div>

//           <Link
//             to='/'
//             className='flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-white transition'
//           >
//             <BsArrowLeft />
//             Back
//           </Link>
//         </div>
//       </header>

//       {/* Main */}
//       <main className='relative z-10 flex flex-col items-center px-6 py-16'>
//         <motion.h1
//           className='mb-3 text-5xl font-bold text-slate-800'
//           initial={{ opacity: 0, y: -15 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           Select Quarter
//         </motion.h1>

//         <motion.p
//           className='mb-12 text-slate-500 text-lg'
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           Choose the quarter whose documents you'd like to view.
//         </motion.p>

//         <div className='grid w-full max-w-5xl gap-8 sm:grid-cols-2'>
//           {quarters.map((quarter, index) => (
//             <motion.div
//               key={quarter}
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.4,
//                 delay: index * 0.08
//               }}
//             >
//               <Link
//                 to={`/home/${quarter}`}
//                 className='
//                   group
//                   block
//                   rounded-3xl
//                   bg-white/75
//                   backdrop-blur-xl
//                   p-7
//                   shadow-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-2
//                   hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]
//                 '
//               >
//                 <div className='flex items-start gap-5'>
//                   <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-200 text-amber-700'>
//                     <BsFolderFill className='text-3xl' />
//                   </div>

//                   <div className='flex-1'>
//                     <h2 className='text-2xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors'>
//                       {displayLabels[quarter]}
//                     </h2>

//                     <p className='mt-2 text-sm text-slate-500'>
//                       Board & Committee Documents
//                     </p>

//                     <div className='mt-5 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100'>
//                       Open Documents →
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className='relative z-10 py-10 text-center text-sm text-slate-500'>
//         © {new Date().getFullYear()} Riatirimba Board Portal
//       </footer>
//     </div>
//   )
// }






import { Link, useParams } from 'react-router-dom'
import { BsFolderFill, BsArrowLeft } from 'react-icons/bs'
import { Image } from '@mantine/core'
import { motion } from 'framer-motion'
import LOGO from '../assets/logo.png'
import { yearFolders } from '../data/categories'

export default function QuarterSelector () {
  const { year } = useParams()

  const financialYears: Record<string, string[]> = {
    '2024-2025': ['2024-2025.Q3', '2024-2025.Q4'],

    '2025-2026': [
      '2025-2026.Q1',
      '2025-2026.Q2',
      '2025-2026.Q3',
      '2025-2026.Q4'
    ],

    '2026-2027': [
      '2026-2027.Q1',
      // '2026-2027.Q2',
      // '2026-2027.Q3',
      // '2026-2027.Q4'
    ]
  }

  const displayLabels: Record<string, string> = {
    '2024-2025.Q3': '3rd Quarter',
    '2024-2025.Q4': '4th Quarter',

    '2025-2026.Q1': '1st Quarter',
    '2025-2026.Q2': '2nd Quarter',
    '2025-2026.Q3': '3rd Quarter',
    '2025-2026.Q4': '4th Quarter',

    '2026-2027.Q1': '1st Quarter',
    // '2026-2027.Q2': '2nd Quarter',
    // '2026-2027.Q3': '3rd Quarter',
    // '2026-2027.Q4': '4th Quarter'
  }

  const quarters = financialYears[year || ''] || []
  const extraFolders = yearFolders[year || ''] || []

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      {/* Background blobs */}
      <div className='absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl' />
      <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl' />

      {/* Header */}
      <header className='sticky top-0 z-20 bg-white/60 backdrop-blur-2xl shadow-sm'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Image src={LOGO} alt='Logo' className='w-10 h-10' />

            <div>
              <h1 className='text-xl font-semibold text-slate-800'>
                Riatirimba Docs & Policies
              </h1>

              <p className='text-sm text-slate-500'>Financial Year {year}</p>
            </div>
          </div>

          <Link
            to='/'
            className='flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-white transition'
          >
            <BsArrowLeft />
            Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className='relative z-10 flex flex-col items-center px-6 py-16'>
        <motion.h1
          className='mb-3 text-5xl font-bold text-slate-800'
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Select Quarter
        </motion.h1>

        <motion.p
          className='mb-12 text-slate-500 text-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Choose the quarter whose documents you'd like to view.
        </motion.p>

        <div className='grid w-full max-w-5xl gap-8 sm:grid-cols-2'>
          {quarters.map((quarter, index) => (
            <motion.div
              key={quarter}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08
              }}
            >
              <Link
                to={`/home/${quarter}`}
                className='
                  group
                  block
                  rounded-3xl
                  bg-white/75
                  backdrop-blur-xl
                  p-7
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]
                '
              >
                <div className='flex items-start gap-5'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-200 text-amber-700'>
                    <BsFolderFill className='text-3xl' />
                  </div>

                  <div className='flex-1'>
                    <h2 className='text-2xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors'>
                      {displayLabels[quarter]}
                    </h2>

                    <p className='mt-2 text-sm text-slate-500'>
                      Board & Committee Documents
                    </p>

                    <div className='mt-5 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100'>
                      Open Documents →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {extraFolders.map((folder, index) => (
            <motion.div
              key={folder.path}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (quarters.length + index) * 0.08
              }}
            >
              <Link
                to={`/category/${year}/${folder.path}`}
                className='
                  group
                  block
                  rounded-3xl
                  bg-white/75
                  backdrop-blur-xl
                  p-7
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)]
                '
              >
                <div className='flex items-start gap-5'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCFCE7] text-[#15803D]'>
                    <BsFolderFill className='text-3xl' />
                  </div>

                  <div className='flex-1'>
                    <h2 className='text-2xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors'>
                      {folder.name}
                    </h2>

                    <p className='mt-2 text-sm text-slate-500'>
                      Financial Year {year}
                    </p>

                    <div className='mt-5 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100'>
                      Open Documents →
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className='relative z-10 py-10 text-center text-sm text-slate-500'>
        © {new Date().getFullYear()} Riatirimba Board Portal
      </footer>
    </div>
  )
}