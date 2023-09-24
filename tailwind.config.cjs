/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#00f6ff',
        primaryText: '#111827',
        secondaryText: '#6b7280',
        gray50: '#f9fafb',
        gray100: '#f3f4f6',
        gray200: '#5e7eb',
        gray300: '#d1d5db',
        gray500: '#6b7280',
        gray600: '#4b5563',
        gray700: '#374151',
        white: '#ffffff',
        blue500: '#3b82f6',
        blue700: '#1d4ed8',
        black: '#000000',
        yellow500: '#eab308',
        green600: '#16a34a',
        gray900: '#111827',
        red600: '#dc2626',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',

        infoText: '#B27CFF',

        primaryFill: 'rgba(19, 13, 26, 0.64)',
        secondaryFill: 'rgba(255, 255, 255, 0.08)',
        secondaryFillLight: 'rgba(255, 255, 255, 0.16)',
        secondaryFillDim: 'rgba(255, 255, 255, 0.64)',
        attentionFill: 'rgba(255, 178, 55, 0.12)',
        attentionText: '#FFB237',
        infoFill: 'rgba(255, 255, 255, 0.08)',

        warningFill: 'rgba(255, 92, 92, 0.16)',
        warningText: '#FF5C5C',
        hoverLight: 'rgba(255, 255, 255, 0.16)',
        buttonGradient:
          'radial-gradient(59.21% 78.44% at 50% 50%, #5A38A3 0%, #683FAB 31.77%, #9D52FF 68.23%, #EDBCFC 96.35%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    // screens: {
    //   xs: '480px',
    //   ss: '620px',
    //   sm: '768px',
    //   md: '1060px',
    //   lg: '1200px',
    //   xl: '1700px',
    // },

    screens: {
      xs: '480px',
      ss: '620px',
      sm: '960px',
      md: '1440px',
      lg: '1920px',
      xl: '2560px',
    },
  },
  plugins: [],
};
// primary: '#F5385D',
