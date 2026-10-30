import { ShowcaseApp } from '@/types';

const appsData: ShowcaseApp[] = [
  {
    id: 'timekeeper',
    logo: '/apps/timekeeper.svg',
    name: 'TimeKeeper',
    tagline: 'Work-attendance tracker for hybrid work',
    description: 'Log office, work-from-home, leave, and holiday days on a calendar and track progress toward your in-office target, with everything stored in a spreadsheet in your own Google Drive.',
    features: [
      'Calendar-based day marking: WFO, WFH, Leave, or Holiday',
      'Office allowance tracking with progress toward targets',
      'Push notification reminders for unmarked days',
      'Minimal Google permissions: access only to the sheet it creates',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Google Sign-In', 'Google Drive API', 'PWA'],
    url: 'https://timekeeper.app.abishekmosesraj.com/',
    privacyUrl: 'https://timekeeper.app.abishekmosesraj.com/privacy',
    termsUrl: 'https://timekeeper.app.abishekmosesraj.com/terms',
    accent: 'blue',
  },
  {
    id: 'expensekeeper',
    logo: '/apps/expensekeeper.png',
    name: 'ExpenseKeeper',
    tagline: 'Track daily credits & debits with notes and tags',
    description: 'A personal finance tracker for daily income and expenses with monthly summaries, date-range reports, budgets, and charts, all stored privately in a Google Sheet in your own Drive.',
    features: [
      'Daily transaction logging with notes and tags',
      'Monthly summaries and custom date-range reports',
      'Budgets and spending charts',
      'No database: data lives in your own Google Sheet',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Google Sign-In', 'Google Sheets', 'PWA'],
    url: 'https://expensekeeper.app.abishekmosesraj.com/',
    privacyUrl: 'https://expensekeeper.app.abishekmosesraj.com/privacy',
    termsUrl: 'https://expensekeeper.app.abishekmosesraj.com/terms',
    accent: 'green',
  },
  {
    id: 'surveykeeper',
    logo: '/apps/surveykeeper.svg',
    name: 'SurveyKeeper',
    tagline: 'Collect feedback with a link, keep answers in your sheet',
    description: 'Write feedback questions, share a link for each audience, and read the responses as a summary or straight in Google Sheets, with every form and answer stored in a private spreadsheet in your own Drive.',
    features: [
      'Ratings, 0-10 recommend scores, choices, yes/no, and free-text questions',
      'Multiple links per form with labels, expiry dates, response caps, and QR codes',
      'Results at a glance with averages, option counts, and CSV export',
      'Minimal Google permissions: access only to the sheet it creates',
    ],
    techStack: ['Tailwind CSS', 'Google Sign-In', 'Google Sheets', 'Google Drive API'],
    url: 'https://surveykeeper.app.abishekmosesraj.com/',
    privacyUrl: 'https://surveykeeper.app.abishekmosesraj.com/privacy',
    termsUrl: 'https://surveykeeper.app.abishekmosesraj.com/terms',
    accent: 'purple',
  },
];

export default appsData;
