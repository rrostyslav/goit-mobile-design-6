import { BaseInput, BaseInputProps } from "@/components/common/BaseInput"
import { useState } from "react"
import { colors } from "@/design-system/colors"
import { TouchableOpacity, View } from "react-native"
import EyeInvisible from "@/assets/icons/eye-invisible.svg"
import EyeVisible from "@/assets/icons/eye-visible.svg"

type PasswordInputProps = BaseInputProps

type PasswordInputMode = "hidden" | "visible"

export const PasswordInput = ({ placeholder = "Password", ...props }: PasswordInputProps) => {
  const [inputMode, setInputMode] = useState<PasswordInputMode>("hidden")

  const handleChangeInputMode = () => {
    setInputMode((prev) => (prev === "visible" ? "hidden" : "visible"))
  }

  return (
    <BaseInput
      {...props}
      inputMode="text"
      keyboardType="visible-password"
      placeholder={placeholder}
      keyboardAppearance="default"
      secureTextEntry={inputMode === "hidden"}
      rightAdornment={
        <TouchableOpacity onPress={handleChangeInputMode} activeOpacity={1.2}>
          {inputMode === "hidden" ? <EyeInvisible /> : <EyeVisible />}
        </TouchableOpacity>
      }
    />
  )
}
