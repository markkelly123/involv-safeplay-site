// theme.ts
// Centralised theme config for Involv / trust palette
export const theme = {
  colors: {
    // Trust anchor + supporting blues
    brand: {
      DEFAULT: '#1E4D8F',   // primary
      light:   '#63B3ED',   // lighter support
      medium:  '#2B6CB0',   // secondary
      dark:    '#163B6D',   // deep brand
    },
    // Neutral foundation
    neutral: {
      background: '#F7FAFC', // page bg
      surface:    '#FFFFFF', // cards
      muted:      '#EDF2F7', // subtle bg
      border:     '#E2E8F0',
      text:       '#2D3748', // body text
      textMuted:  '#4A5568',
      textInvert: '#FFFFFF',
    },
    // Accent (choose one consistently project-wide)
    accent: {
      warm:  '#E76F51',  // terracotta
      amber: '#F6AD55',  // muted amber
    },
  },
  // Typography scale
  typography: {
    fontFamily: {
      sans: '"Inter", system-ui, sans-serif',
      serif: '"Merriweather", serif',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
  },
  // Radii + spacing tokens
  radii: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.15)',
  },
};

// Example helper for usage
export type Theme = typeof theme;