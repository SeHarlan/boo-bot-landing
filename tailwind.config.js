/** @type {import('tailwindcss').Config} */

function hexToRGB(hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${ r } ${ g } ${ b } / <alpha-value>)`;
}
const borderRotateKeyframes = () => {
  const keyframes = {}
  for (let i = 0; i <= 100; i++) {
    const deg = Math.round(i * 3.6)
    keyframes[`${ i }%`] = { "background-image": `linear-gradient(${deg}deg, var(--tw-gradient-stops))` }
  }
  console.log(keyframes)
  return keyframes
}
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './svg/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeWhite: hexToRGB('#FFFFFF'),
        themeBlack: hexToRGB('#000000'),
        themePink: hexToRGB('#D738FF'),
        themeSkyBlue: hexToRGB('#91F9FD'),
        themeBlue: hexToRGB('#2E34F0'),
      },
      fontFamily: {
        title: ['var(--oswald)'],
        body: ["var(--avenir)"]
      },
      keyframes: {
        borderRotate: borderRotateKeyframes(),
        float: {
          "0%": {
            transform: "translateY(0vh)",
            opacity: 0,
          },
          "25%": { opacity: 1 },
          "50%": {
            transform: "translateY(-50vh)",
            opacity: 1,
          },
          "75%": { opacity: 1 },
          "100%": {
            transform: "translateY(-100vh)",
            opacity: 0,
          },
        },
        wave: {
          "0%, 100%": { marginLeft: "-2rem", marginBottom: "0rem" },
          "25%": { marginBottom: "-0.7rem" },
          "50%": { marginLeft: "2rem", marginBottom: "0rem" },
          "75%": { marginBottom: "-0.8rem" },
        },
        glitchLeft: {
          "0%": { transform: "translate(0)" },
          "19%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "21%": { transform: "translate(0)" },
          "47%": { transform: "translate(0)" },
          "50%": { transform: "translate(-7px, 3px)" },
          "51%": { transform: "translate(0)" },
          "69%": { transform: "translate(0)" },
          "70%": { transform: "translate(-3px, 3px)" },
          "71%": { transform: "translate(0)" },
        },
        glitchRight: {
          "0%": { transform: "translate(0)" },
          "19%": { transform: "translate(0)" },
          "20%": { transform: "translate(3px, -3px)" },
          "21%": { transform: "translate(0)" },
          "47%": { transform: "translate(0)" },
          "50%": { transform: "translate(7px, -3px)" },
          "51%": { transform: "translate(0)" },
          "69%": { transform: "translate(0)" },
          "70%": { transform: "translate(3px, -3px)" },
          "71%": { transform: "translate(0)" },
        }
      },
      animation: {
        borderRotate: "borderRotate 4s linear infinite",
        float: "float 20s linear infinite, wave 5s ease-in-out infinite",
        glitchLeft: "glitchLeft 6s infinite",
        glitchRight: "glitchRight 6s infinite",
      }
      // height: { screen: 'calc(var(--vh) * 100)' },
      // maxHeight: { screen: 'calc(var(--vh) * 100)' },
      // minHeight: { screen: 'calc(var(--vh) * 100)' },
    },
  },
  plugins: [],
}

