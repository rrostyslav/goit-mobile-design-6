import { Text, TextProps } from "react-native"
import { baseFontStyles, fontStyles, TypographyName } from "@/design-system/typography"
import { ColorName, colors } from "@/design-system/colors"
import { StyleSheet } from "react-native"

type TypographyProps = {
  name: TypographyName
  color?: ColorName
  customColor?: string
  children: string | number
} & TextProps

export const Typography = ({ name, color, children, customColor, ...rest }: TypographyProps) => (
  <Text
    style={StyleSheet.flatten([
      baseFontStyles.base,
      fontStyles[name],
      { color: color ? colors[color] : customColor ? customColor : "black" },
    ])}
    {...rest}
  >
    {children}
  </Text>
)
