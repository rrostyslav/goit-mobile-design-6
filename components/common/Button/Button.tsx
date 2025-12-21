import { View, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { Typography } from "../Typography"
import { colors } from "@/design-system/colors"

type ButtonProps = {
  children: string
} & TouchableOpacityProps

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Typography name="action-m" color="neutral">
        {children}
      </Typography>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.highlight,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    alignSelf: "stretch",
  },
})
