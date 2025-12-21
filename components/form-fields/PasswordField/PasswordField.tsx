import { PasswordInput } from "@/components/common/PasswordInput"
import { Controller, useFormContext } from "react-hook-form"
import { Typography } from "@/components/common/Typography"
import { View } from "react-native"

type PasswordFieldProps = {
  name: string
}

export const PasswordField = ({ name }: PasswordFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <View>
          <PasswordInput onBlur={onBlur} onChangeText={onChange} value={value} />
          {fieldState.error?.message !== undefined && (
            <Typography name="body-m" color="black">
              {fieldState.error.message}
            </Typography>
          )}
        </View>
      )}
      name={name}
    />
  )
}
