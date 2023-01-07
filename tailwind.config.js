module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#501A82",
          "secondary": "#175E6E",
          "accent": "#1FB2A6",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#0e7490",
          "success": "#15803d",
          "warning": "#facc15",
          "error": "#EB1313",
        },
      },],
  },
};
