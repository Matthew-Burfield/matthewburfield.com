import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const goldenSand = "#f1da76"
const porsche = "#e8a757"
const rawSienna = "#e37f42"
// const cumin = "#914526"
// const quincy = "#634131"

export default merge(defaultThemeColors, {
  // text: blueGray,
  primary: rawSienna,
  highlight: goldenSand,
  modes: {
    dark: {
      // background: blueGray,
      primary: rawSienna,
      highlight: porsche,
    },
  },
  prism: {
    keyword: porsche,
    tag: goldenSand,
    diffAdd: "green",
    diffDelete: "red",
  },
})
