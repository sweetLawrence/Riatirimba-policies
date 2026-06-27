// import { Link } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { Image } from '@mantine/core'
// import LOGO from '../assets/logo.png'

// export default function QuarterSelector () {
//   const quarters = ['2024-2025.Q3', '2024-2025.Q4']
//   const displayLabels: Record<string, string> = {
//     '2024-2025.Q3': 'The 3RD_Q_2024-2025 Full _Board and Cmmtt_Min & Docs',
//     '2024-2025.Q4': 'The 4TH_Q_2024-2025 Full _Board and Cmmtt_Min & Docs'
//   }

//   return (
//     <div className='bdy overflow-hidden'>
//       <div className='bg-white shadow p-4 flex items-center gap-4'>
//         <Image src={LOGO} alt='Logo' className='w-[40px] h-[40px]' />
//         <h1 className='text-xl font-semibold text-blue-900'>
//           Riatirimba Docs and Policies
//         </h1>
//       </div>

//       <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 overflow-hidden'>
//         <div className='max-w-md w-full'>
//           <h1 className='text-2xl font-bold mb-6 text-center text-blue-900'>
//             Select Quarter
//           </h1>
//           <div className='grid grid-cols-1 gap-4'>
//             {quarters.map(q => (
//               <Link
//                 key={q}
//                 to={`/home/${q}`}
//                 className='bg-white shadow-md hover:shadow-lg transition-all p-4 rounded-lg flex items-center gap-3 hover:scale-[1.02]'
//               >
//                 <BsFolderFill className='text-yellow-500 text-2xl' />
//                 <span className='text-lg font-medium text-blue-800'>
//                   {/* {q} */}
//                   {displayLabels[q] || q}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// import { Link } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { Image } from '@mantine/core'
// import LOGO from '../assets/logo.png'

// export default function QuarterSelector () {
//   const quarters = ['2024-2025.Q3', '2024-2025.Q4', '2025-2026.Q1']
//   const displayLabels: Record<string, string> = {
//     '2024-2025.Q3': 'The 3RD_Q_2024-2025 Full _Board and Cmmtt_Min & Docs',
//     '2024-2025.Q4': 'The 4TH_Q_2024-2025 Full _Board and Cmmtt_Min & Docs',
//     '2025-2026.Q1': 'The 1ST_Q_2025-2026 Full _Board and Cmmtt_Min & Docs'
//   }

//   return (
//     <div className='bdy overflow-hidden bg-gray-50 min-h-screen flex flex-col'>
//       {/* Navbar */}
//       <div className='bg-white shadow p-4 flex items-center gap-4'>
//         <Image src={LOGO} alt='Logo' className='w-[40px] h-[40px]' />
//         <h1 className='text-xl font-semibold text-blue-900'>
//           Riatirimba Docs and Policies
//         </h1>
//       </div>

//       {/* Main content */}
//       <div className='flex flex-1 flex-col items-center justify-center p-6'>
//         <div className='max-w-md w-full'>
//           <h1 className='text-2xl font-bold mb-6 text-center text-blue-900'>
//             Select Quarter
//           </h1>
//           <div className='grid grid-cols-1 gap-4'>
//             {quarters.map(q => (
//               <Link
//                 key={q}
//                 to={`/home/${q}`}
//                 className='bg-white shadow-md hover:shadow-lg transition-all p-4 rounded-lg flex items-center gap-3 hover:scale-[1.02]'
//               >
//                 <BsFolderFill className='text-yellow-500 text-2xl' />
//                 <span className='text-lg font-medium text-blue-800'>
//                   {displayLabels[q] || q}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }












// import { Link } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { Image } from '@mantine/core'
// import LOGO from '../assets/logo.png'
// import { motion } from 'framer-motion'

// export default function QuarterSelector() {
//   const quarters = ['2024-2025.Q3', '2024-2025.Q4', '2025-2026.Q1','2025-2026.Q2','2025-2026.Q3','2025-2026.Q4','MOU','Policies']

//   const displayLabels: Record<string, string> = {
//     '2024-2025.Q3': '3rd Quarter • 2024–2025 • Board & Committee Docs',
//     '2024-2025.Q4': '4th Quarter • 2024–2025 • Board & Committee Docs',
//     '2025-2026.Q1': '1st Quarter • 2025–2026 • Board & Committee Docs',
//     '2025-2026.Q2': '2nd Quarter • 2025–2026 • Board & Committee Docs',
//     '2025-2026.Q3': '3rd Quarter • 2025–2026 • Board & Committee Docs',
//     '2025-2026.Q4': '4th Quarter • 2025–2026 • Board & Committee Docs',
//     'MOU':'MOU',
//     'Policies':'Policies and Strategic Plan '
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
//       {/* floating gradient blobs (Dribbble style) */}
//       <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] rounded-full bg-blue-300 blur-3xl opacity-40"></div>
//       <div className="absolute bottom-[-10rem] left-[-10rem] w-[25rem] h-[25rem] rounded-full bg-indigo-300 blur-3xl opacity-40"></div>

//       {/* Navbar */}
//       <header className="backdrop-blur-xl bg-white/70 border-b border-white/30 shadow-sm sticky top-0 z-10">
//         <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
//           <Image src={LOGO} alt="Logo" className="w-[40px] h-[40px] drop-shadow-sm" />
//           <h1 className="text-xl font-semibold text-blue-900 tracking-tight">
//             Riatirimba Docs & Policies
//           </h1>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="flex flex-col items-center justify-center py-20 px-6">
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           Select a Quarter
//         </motion.h1>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
//           {quarters.map((q, index) => (
//             <motion.div
//               key={q}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <Link
//                 to={`/home/${q}`}
//                 className="group relative block overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-[1.03]"
//               >
//                 <div className="flex flex-col items-start gap-3">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-md">
//                     <BsFolderFill className="text-2xl" />
//                   </div>
//                   <h2 className="text-lg font-semibold text-blue-900 group-hover:text-indigo-700 transition-colors leading-snug">
//                     {displayLabels[q] || q}
//                   </h2>
//                 </div>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="text-center py-8 text-sm text-gray-500">
//         © {new Date().getFullYear()} Riatirimba Board Portal
//       </footer>
//     </div>
//   )
// }








// import { Link, useParams } from 'react-router-dom'
// import { BsFolderFill } from 'react-icons/bs'
// import { Image } from '@mantine/core'
// import { motion } from 'framer-motion'
// import LOGO from '../assets/logo.png'

// export default function QuarterSelector() {

//   const { year } = useParams()

//   const financialYears: Record<string, string[]> = {

//     '2024-2025': [
//       '2024-2025.Q3',
//       '2024-2025.Q4'
//     ],

//     '2025-2026': [
//       '2025-2026.Q1',
//       '2025-2026.Q2',
//       '2025-2026.Q3',
//       '2025-2026.Q4'
//     ]
//   }

//   const displayLabels: Record<string, string> = {

//     '2024-2025.Q3': '3rd Quarter',

//     '2024-2025.Q4': '4th Quarter',

//     '2025-2026.Q1': '1st Quarter',

//     '2025-2026.Q2': '2nd Quarter',

//     '2025-2026.Q3': '3rd Quarter',

//     '2025-2026.Q4': '4th Quarter'
//   }

//   const quarters = financialYears[year || ''] || []

//   return (

//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100">

//       <header className="bg-white/70 backdrop-blur border-b shadow-sm">

//         <div className="max-w-6xl mx-auto px-6 py-4 flex gap-4 items-center">

//           <Image src={LOGO} className="w-10 h-10" />

//           <h1 className="text-xl font-semibold text-blue-900">
//             {year}
//           </h1>

//         </div>

//       </header>

//       <main className="flex flex-col items-center py-20 px-6">

//         <motion.h1
//           className="text-4xl font-bold mb-10 text-blue-900"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           Select Quarter
//         </motion.h1>

//         <div className="grid md:grid-cols-2 gap-8 max-w-3xl w-full">

//           {quarters.map((quarter, index) => (

//             <motion.div
//               key={quarter}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * .1 }}
//             >

//               <Link
//                 to={`/home/${quarter}`}
//                 className="block rounded-2xl bg-white/70 backdrop-blur border shadow-lg p-6 hover:scale-[1.03] transition"
//               >

//                 <div className="p-3 w-fit rounded-xl bg-yellow-400 text-white">
//                   <BsFolderFill className="text-2xl" />
//                 </div>

//                 <h2 className="mt-4 text-xl font-semibold text-blue-900">
//                   {displayLabels[quarter]}
//                 </h2>

//               </Link>

//             </motion.div>

//           ))}

//         </div>

//       </main>

//     </div>

//   )

// }



























import { Link, useParams } from 'react-router-dom'
import { BsFolderFill, BsArrowLeft } from 'react-icons/bs'
import { Image } from '@mantine/core'
import { motion } from 'framer-motion'
import LOGO from '../assets/logo.png'

export default function QuarterSelector() {
  const { year } = useParams()

  const financialYears: Record<string, string[]> = {
    '2024-2025': [
      '2024-2025.Q3',
      '2024-2025.Q4'
    ],

    '2025-2026': [
      '2025-2026.Q1',
      '2025-2026.Q2',
      '2025-2026.Q3',
      '2025-2026.Q4'
    ]
  }

  const displayLabels: Record<string, string> = {
    '2024-2025.Q3': '3rd Quarter',
    '2024-2025.Q4': '4th Quarter',

    '2025-2026.Q1': '1st Quarter',
    '2025-2026.Q2': '2nd Quarter',
    '2025-2026.Q3': '3rd Quarter',
    '2025-2026.Q4': '4th Quarter'
  }

  const quarters = financialYears[year || ''] || []

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-300/30 blur-3xl" />

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-2xl shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Image
              src={LOGO}
              alt="Logo"
              className="w-10 h-10"
            />

            <div>
              <h1 className="text-xl font-semibold text-slate-800">
                Riatirimba Docs & Policies
              </h1>

              <p className="text-sm text-slate-500">
                Financial Year {year}
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="flex items-center gap-2 rounded-xl bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow hover:bg-white transition"
          >
            <BsArrowLeft />
            Back
          </Link>

        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex flex-col items-center px-6 py-16">

        <motion.h1
          className="mb-3 text-5xl font-bold text-slate-800"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Select Quarter
        </motion.h1>

        <motion.p
          className="mb-12 text-slate-500 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Choose the quarter whose documents you'd like to view.
        </motion.p>

        <div className="grid w-full max-w-5xl gap-8 sm:grid-cols-2">

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
                className="
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
                "
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-200 text-amber-700">
                    <BsFolderFill className="text-3xl" />
                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {displayLabels[quarter]}
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                      Board & Committee Documents
                    </p>

                    <div className="mt-5 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 transition-all group-hover:opacity-100">
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
      <footer className="relative z-10 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Riatirimba Board Portal
      </footer>

    </div>
  )
}