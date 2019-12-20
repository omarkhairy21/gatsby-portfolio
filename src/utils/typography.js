import Typography from "typography";
//import fairyGateTheme from "typography-theme-fairy-gates";

const typography = new Typography({
  baseFontSize: '16px',
  headerFontFamily: ['Ubuntu',  'sans-serif'],
  bodyFontFamily: ['Ubuntu', 'sans-serif'],
});

export const { scale, rhythm, options } = typography;
export default typography;