type ColorValue = `#${string}`

type Colors = Record<ColorName, ColorValue>

export type ColorName = "highlight" | "neutral" | "black" | "neutralDarkest"

export const colors: Colors = {
  highlight: "#006FFD",
  neutral: "#FFFFFF",
  black: "#000000",
  neutralDarkest: "#C5C6CC",
}
