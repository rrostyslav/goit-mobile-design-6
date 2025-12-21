import { BaseInput, BaseInputProps } from "@/components/common/BaseInput"

export type EmailInputProps = BaseInputProps

export const EmailInput = ({ placeholder = "Email", ...props }: EmailInputProps) => {
  return <BaseInput {...props} inputMode="email" keyboardType="email-address" placeholder={placeholder} />
}
