import { ReactNode } from "react"
import { Text } from "react-native"
import { baseFontStyles, fontStyles, TypographyName } from "@/design-system/typography"
import { ColorName, colors } from "@/design-system/colors"
import { StyleSheet } from "react-native"

type TypographyProps = {
  name: TypographyName
  color?: ColorName
  children: string
}

export const Typography = ({ name, color = "black", children }: TypographyProps) => (
  <Text style={StyleSheet.flatten([baseFontStyles.base, fontStyles[name], { color: colors[color] }])}>{children}</Text>
)
