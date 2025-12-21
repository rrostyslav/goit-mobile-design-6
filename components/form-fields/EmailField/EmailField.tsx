import { EmailInput } from "@/components/common/EmailInput"
import { useFormContext, Controller } from "react-hook-form"
import { View } from "react-native"
import { Typography } from "@/components/common/Typography"

type EmailFieldProps = {
  name: string
}

export const EmailField = ({ name }: EmailFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value }, fieldState }) => (
        <View>
          <EmailInput onBlur={onBlur} onChangeText={onChange} value={value} />
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
