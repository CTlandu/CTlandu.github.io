/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: token('paper'), 2: token('paper-2') },
        ink: { DEFAULT: token('ink'), 2: token('ink-2'), 3: token('ink-3') },
        line: token('line'),
        green: { DEFAULT: token('green'), deep: token('green-deep'), text: token('green-text') },
        gold: token('gold'),
        cream: { DEFAULT: token('cream'), 2: token('cream-2') },
      },
      fontFamily: {
        serif: ['"Source Serif 4 Variable"', 'Georgia', '"Songti SC"', '"Noto Serif SC"', 'STSong', 'serif'],
        sans: ['"Geist Variable"', '"PingFang SC"', '"Hiragino Sans GB"', '"Microsoft YaHei"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '72rem' },
    },
  },
  plugins: [],
}
