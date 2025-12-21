import { TextInput, StyleSheet, TextInputProps, View, BlurEvent, FocusEvent } from "react-native"
import { colors } from "@/design-system/colors"
import { fontStyles } from "@/design-system/typography"
import { ReactNode, useState } from "react"

export type BaseInputProps = Omit<TextInputProps, "style"> & {
  leftAdornment?: ReactNode
  rightAdornment?: ReactNode
}
// "onFocus" | "onBlur" |
export const BaseInput = ({ leftAdornment, rightAdornment, onFocus, onBlur, ...rest }: BaseInputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e: FocusEvent) => {
    setIsFocused(true)

    if (onFocus) {
      onFocus(e)
    }
  }

  const handleBlur = (e: BlurEvent) => {
    setIsFocused(false)

    if (onBlur) {
      onBlur(e)
    }
  }

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        {
          borderColor: isFocused ? colors.highlight : colors.neutralDarkest,
        },
      ])}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {leftAdornment ? <View style={styles.adornment}>{leftAdornment}</View> : null}
      <TextInput
        {...rest}
        style={{
          flex: 1,
          paddingHorizontal: 0,
          paddingVertical: 0,
          textAlign: "left",
          textAlignVertical: "center",
          outline: "none",
          ...fontStyles["body-m"],
        }}
      />
      {rightAdornment ? <View style={styles.adornment}>{rightAdornment}</View> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    borderColor: colors.neutralDarkest,
    borderWidth: 1,
    borderRadius: 12,
    height: 48,
  },
  adornment: { justifyContent: "center" },
})
