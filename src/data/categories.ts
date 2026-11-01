// // export const categories = [
// //   { name: 'Full Board Committees Overview', path: 'fullboard' },
// //   { name: 'Risk & Audit Compliance Committee', path: 'audit' },
// //   {
// //     name: 'Finance, Operation and Infrastructure Development Committee',
// //     path: 'finance'
// //   },
// //   { name: 'Education, Training and HR Committee', path: 'academics' },
  
// // ]






// export const categories = [
//   { name: 'Full Board Committees Overview', path: 'fullboard' },
//   { name: 'Risk & Audit Compliance Committee', path: 'audit' },
//   {
//     name: 'Finance, Operation and Infrastructure Development Committee',
//     path: 'finance'
//   },
//   { name: 'Education, Training and HR Committee', path: 'academics' },

// ]

// // Year-level folders shown beside the quarter folders on the Select Quarter page.
// // Documents for these are stored with quarter = the financial year (e.g. "2026-2027")
// // and category = the path below.
// export const yearFolders: Record<string, { name: string; path: string }[]> = {
//   '2026-2027': [{ name: 'Human Resource Instrument', path: 'hr-instrument' }]
// }

// export const allCategories = [
//   ...categories,
//   ...Object.values(yearFolders).flat()
// ]














// Committee folders shown inside every quarter.
export const categories = [
  { name: 'Full Board Committees Overview', path: 'fullboard' },
  { name: 'Risk & Audit Compliance Committee', path: 'audit' },
  {
    name: 'Finance, Operation and Infrastructure Development Committee',
    path: 'finance'
  },
  { name: 'Education, Training and HR Committee', path: 'academics' }
]

// Financial years and the quarters currently published for each.
export const financialYears: Record<string, string[]> = {
  '2024-2025': ['2024-2025.Q3', '2024-2025.Q4'],
  '2025-2026': [
    '2025-2026.Q1',
    '2025-2026.Q2',
    '2025-2026.Q3',
    '2025-2026.Q4'
  ],
  '2026-2027': [
    '2026-2027.Q1'
    // '2026-2027.Q2',
    // '2026-2027.Q3',
    // '2026-2027.Q4'
  ]
}

export const years = Object.keys(financialYears)

// Year-level folders shown beside the quarter folders on the Select Quarter page.
// Documents for these are stored with quarter = the financial year (e.g. "2026-2027")
// and category = the path below.
export const yearFolders: Record<string, { name: string; path: string }[]> = {
  '2026-2027': [{ name: 'Human Resource Instrument', path: 'hr-instrument' }]
}

// Library folders (not tied to a quarter). key = category value in PocketBase.
export const library = [
  { key: 'Policies', name: 'Policies & Strategic Plans' },
  { key: 'MOU', name: 'MOUs' }
]

export const allCategories = [
  ...categories,
  ...Object.values(yearFolders).flat()
]

const ordinals: Record<string, string> = {
  Q1: '1st Quarter',
  Q2: '2nd Quarter',
  Q3: '3rd Quarter',
  Q4: '4th Quarter'
}

export const quarterLabel = (quarter: string = '') =>
  ordinals[quarter.split('.')[1] ?? ''] ?? quarter

export const yearOf = (quarter: string = '') => quarter.split('.')[0]

export const categoryName = (path: string = '') =>
  allCategories.find(c => c.path === path)?.name ??
  library.find(l => l.key === path)?.name ??
  path

// "1st Quarter · FY 2025-2026", "FY 2026-2027", or "" for library docs
export const periodLabel = (quarter: string = '') => {
  if (quarter.includes('.')) return `${quarterLabel(quarter)} · FY ${yearOf(quarter)}`
  if (/^\d{4}-\d{4}$/.test(quarter)) return `FY ${quarter}`
  return ''
}