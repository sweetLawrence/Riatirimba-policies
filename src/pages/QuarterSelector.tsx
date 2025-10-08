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

import { Link } from 'react-router-dom'
import { BsFolderFill } from 'react-icons/bs'
import { Image } from '@mantine/core'
import LOGO from '../assets/logo.png'

export default function QuarterSelector () {
  const quarters = ['2024-2025.Q3', '2024-2025.Q4', '2025-2026.Q1']
  const displayLabels: Record<string, string> = {
    '2024-2025.Q3': 'The 3RD_Q_2024-2025 Full _Board and Cmmtt_Min & Docs',
    '2024-2025.Q4': 'The 4TH_Q_2024-2025 Full _Board and Cmmtt_Min & Docs',
    '2025-2026.Q1': 'The 1ST_Q_2025-2026 Full _Board and Cmmtt_Min & Docs'
  }

  return (
    <div className='bdy overflow-hidden bg-gray-50 min-h-screen flex flex-col'>
      {/* Navbar */}
      <div className='bg-white shadow p-4 flex items-center gap-4'>
        <Image src={LOGO} alt='Logo' className='w-[40px] h-[40px]' />
        <h1 className='text-xl font-semibold text-blue-900'>
          Riatirimba Docs and Policies
        </h1>
      </div>

      {/* Main content */}
      <div className='flex flex-1 flex-col items-center justify-center p-6'>
        <div className='max-w-md w-full'>
          <h1 className='text-2xl font-bold mb-6 text-center text-blue-900'>
            Select Quarter
          </h1>
          <div className='grid grid-cols-1 gap-4'>
            {quarters.map(q => (
              <Link
                key={q}
                to={`/home/${q}`}
                className='bg-white shadow-md hover:shadow-lg transition-all p-4 rounded-lg flex items-center gap-3 hover:scale-[1.02]'
              >
                <BsFolderFill className='text-yellow-500 text-2xl' />
                <span className='text-lg font-medium text-blue-800'>
                  {displayLabels[q] || q}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
