import { TextStyle, StyleSheet } from "react-native"

type BaseFontStyles = {
  base: TextStyle
}

type FontStyles = Record<TypographyName, TextStyle>

export type TypographyName = "h1" | "h5" | "h4" | "body-m" | "body-s" | "action-m" | "caption-m"

export const baseFontStyles = StyleSheet.create({
  base: {
    fontFamily: "Inter",
  },
} satisfies BaseFontStyles)

export const fontStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
    letterSpacing: 0.24,
    fontWeight: 800,
  },
  h5: {
    fontSize: 12,
    letterSpacing: 0,
    fontWeight: 700,
  },
  h4: {
    fontSize: 14,
    fontWeight: 700,
    letterSpacing: 0,
  },
  "body-m": {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 20,
  },
  "body-s": {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 16,
  },
  "action-m": {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 0,
  },
  "caption-m": {
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 0.5,
    color: "red",
  },
} satisfies FontStyles)
