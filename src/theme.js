import bgMobileLight from "./images/bg-mobile-light.jpg";
import bgDesktopLight from "./images/bg-desktop-light.jpg";
import bgMobileDark from "./images/bg-mobile-dark.jpg";
import bgDesktopDark from "./images/bg-desktop-dark.jpg";

const lightPalette = {
  white: "#fff",
  veryLightGray: "#fafafa",
  veryLightGrayishBlue: "#e4e5f1",
  lightGrayishBlue: "#d2d3db",
  darkGrayishBlue: "#9394a5",
  veryDarkGrayishBlue: "#484b6a",
  gradient: "linear-gradient(115.84deg, #74C6FF 8.93%, #A472ED 92.1%)",
  mobile: `url(${bgMobileLight})`,
  desktop: `url(${bgDesktopLight})`,
};

const darkPalette = {
  veryDarkBlue: "#161722",
  veryDarkDesaturatedBlue: "#25273c",
  lightGrayishBlue: "#cacde8",
  lightGrayishBlueHover: "#e4e5f1",
  darkGrayishBlue: "#777a92",
  veryDarkGrayishBlue: "#4d5066",
  darkerVeryDarkGrayishBlue: "#393a4c",
  gradient: "linear-gradient(115.84deg, #4C4AE1 8.93%, #A840B1 92.1%)",
  mobile: `url(${bgMobileDark})`,
  desktop: `url(${bgDesktopDark})`,
};

export const lightTheme = {
  header: lightPalette.veryLightGray,
  authenticationType: lightPalette.darkGrayishBlue,
  userGradient: lightPalette.gradient,
  userMenu: lightPalette.white,
  userMenuButtonBorder: lightPalette.veryLightGrayishBlue,
  userMenuButtonText: lightPalette.veryDarkGrayishBlue,
  body: lightPalette.veryLightGray,
  bgImageDesktop: lightPalette.desktop,
  bgImageMobile: lightPalette.mobile,
  input: lightPalette.darkGrayishBlue,
  radioButton: lightPalette.gradient,
  formRadioButton: lightPalette.veryLightGrayishBlue,
  overlay: lightPalette.white,
  todoSection: lightPalette.white,
  shadow: lightPalette.shadow,
  activeTodo: lightPalette.veryDarkGrayishBlue,
  checkedTodo: lightPalette.veryLightGrayishBlue,
  hoverTodo: lightPalette.lightGrayishBlueHover,
  bottomBorder: lightPalette.darkerVeryDarkGrayishBlue,
  footerText: lightPalette.darkGrayishBlue,
};

export const darkTheme = {
  header: darkPalette.veryDarkBlue,
  authenticationType: darkPalette.lightGrayishBlueHover,
  authenticationForm: darkPalette.veryDarkDesaturatedBlue,
  authenticationFormInput: darkPalette.veryDarkGrayishBlue,
  authenticationLine: darkPalette.veryDarkGrayishBlue,
  userGradient: darkPalette.gradient,
  userMenu: darkPalette.veryDarkDesaturatedBlue,
  userMenuButtonBorder: darkPalette.darkerVeryDarkGrayishBlue,
  userMenuButtonText: darkPalette.lightGrayishBlue,
  body: darkPalette.veryDarkBlue,
  bgImageDesktop: darkPalette.desktop,
  bgImageMobile: darkPalette.mobile,
  input: darkPalette.darkGrayishBlue,
  radioButton: darkPalette.gradient,
  formRadioButton: darkPalette.darkerVeryDarkGrayishBlue,
  overlay: darkPalette.veryDarkDesaturatedBlue,
  todoSection: darkPalette.veryDarkDesaturatedBlue,
  shadow: "none",
  activeTodo: darkPalette.lightGrayishBlue,
  checkedTodo: darkPalette.veryDarkGrayishBlue,
  hoverTodo: darkPalette.lightGrayishBlueHover,
  bottomBorder: darkPalette.darkerVeryDarkGrayishBlue,
  footerText: darkPalette.veryDarkGrayishBlue,
};
