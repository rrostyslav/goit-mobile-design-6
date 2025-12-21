type ColorValue = `#${string}`

type Colors = Record<ColorName, string>

export type ColorName = "highlight" | "neutral" | "black" | "neutralDarkest" | "gray"

export const colors: Colors = {
  highlight: "#006FFD",
  neutral: "#FFFFFF",
  black: "#000000",
  neutralDarkest: "#C5C6CC",
  gray: "#8F9098",
}
