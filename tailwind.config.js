/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#00686F',
          dark: '#005359',
          light: '#D8F0EC',
        },
        page: {
          bg: '#F5F8FD',
        },
        card: {
          bg: '#FFFFFF',
          border: '#E2EEF0',
        },
        sidebar: {
          bg: '#EBF3FB', // light blue background
          active: '#00686F',
        },
        panel: {
          blue: '#EAF2FD',
        },
        alert: {
          bg: '#FEE2E2',
          border: '#FCA5A5',
          text: '#DC2626',
        },
        chip: {
          successBg: '#D8F0EC',
          successText: '#00686F',
          upcomingBg: '#DCE9F9',
          upcomingText: '#3B5B8A',
        },
        text: {
          heading: '#0F1F2E',
          body: '#334155',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        '2xl': '16px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'card-p': '24px',
        'card-gap': '24px',
      },
    },
  },
  plugins: [],
}
