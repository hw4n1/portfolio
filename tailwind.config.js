
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A', // Main background
          800: '#1E293B', // Card background
          700: '#334155', // Borders
        },
        electric: {
          DEFAULT: '#3B82F6', // Primary accent
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        cyan: {
          DEFAULT: '#06B6D4', // Secondary accent
          glow: 'rgba(6, 182, 212, 0.5)',
        },
        success: '#22C55E',
        warning: '#F59E0B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'radar-spin': 'radar-spin 4s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'radar-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
