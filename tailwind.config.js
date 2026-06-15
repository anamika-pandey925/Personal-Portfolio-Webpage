/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core pure-black palette
        // Theme variables (dynamically swapped)
        background: "var(--bg)",
        surface: "var(--surface)",
        surfaceLighter: "var(--surface-lighter)",
        surfaceHover: "var(--surface-lighter)",
        border: "var(--border)",

        // Primary / Indigo
        primaryIndigo: "var(--primary)",
        lightIndigo: "var(--primary)",
        darkIndigo: "var(--primary)",

        // Accents
        cyberCyan: "#00f2ff",
        primaryGold: "#f0b429",
        lightGold: "#ffd166",
        darkGold: "#c9861b",
        violet: "#8b5cf6",
        violetLight: "#c4b5fd",

        // Text
        textMain: "var(--fg)",
        textMuted: "var(--text-muted)",
        textDim: "var(--text-muted)",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #00f2ff 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f0b429 0%, #ffd166 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(139,92,246,0.05) 100%)',
      },
      animation: {
        'glow-indigo': 'glow-indigo 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-down': 'slide-down 0.4s ease-out forwards',
        'grid-drift': 'grid-drift 30s linear infinite',
        'bounce-x': 'bounce-x 1.5s ease-in-out infinite',
      },
      keyframes: {
        'glow-indigo': {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.7), 0 0 60px rgba(99,102,241,0.3)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%', opacity: '0.5' },
          '50%': { backgroundPosition: '100% 50%', opacity: '0.8' },
          '100%': { backgroundPosition: '0% 50%', opacity: '0.5' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(99, 102, 241, 0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(4px)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99,102,241,0.3)',
        'glow-md': '0 0 30px rgba(99,102,241,0.4)',
        'glow-lg': '0 0 60px rgba(99,102,241,0.3)',
        'glow-gold': '0 0 20px rgba(240,180,41,0.4)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.4)',
        'card': '0 4px 24px rgba(0,0,0,0.5)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.7), 0 0 30px rgba(99,102,241,0.15)',
        'premium': '0 25px 50px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}
