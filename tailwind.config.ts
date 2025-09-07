// tailwind.config.js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Trust anchor + supporting blues
        brand: {
          DEFAULT: '#1E4D8F',   // primary
          50:  '#F2F6FB',
          100: '#E6EEF7',
          200: '#C6DAF0',
          300: '#A5C6E8',
          400: '#5C94CE',
          500: '#2B6CB0',       // secondary
          600: '#1E4D8F',       // anchor (dup for scale)
          700: '#163B6D',
          800: '#102A4D',
          900: '#0B1D36',
          light: '#63B3ED',     // light supportive blue
          medium: '#2B6CB0',    // secondary
          dark: '#163B6D'       // deep brand
        },
        // Neutrals
        surface: {
          DEFAULT: '#F7FAFC',   // page bg
          muted:   '#EDF2F7',   // cards / subtle sections
          strong:  '#E2E8F0'    // borders/dividers
        },
        text: {
          DEFAULT: '#2D3748',   // body text
          muted:   '#4A5568',
          invert:  '#FFFFFF'
        },
        // Accents (pick ONE globally)
        accent: {
          warm:  '#E76F51',     // terracotta
          amber: '#F6AD55'      // muted amber
        }
      },
      // Semantic aliases for common UI primitives
      textColor: {
        primary: 'var(--text, #2D3748)',
        muted: 'var(--text-muted, #4A5568)',
        inverted: 'var(--text-invert, #FFFFFF)'
      },
      backgroundColor: {
        page: 'var(--bg, #F7FAFC)',
        card: 'var(--card, #FFFFFF)',
        brand: 'var(--brand, #1E4D8F)',
        subtle: 'var(--subtle, #EDF2F7)'
      },
      borderColor: {
        subtle: 'var(--border, #E2E8F0)',
        brand: 'var(--brand, #1E4D8F)'
      }
    }
  },
  plugins: []
}