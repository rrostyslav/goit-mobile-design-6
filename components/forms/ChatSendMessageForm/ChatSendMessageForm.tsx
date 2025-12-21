import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { TextInput, View, StyleSheet } from "react-native"

type ChatSendMessageFormProps = {
  onSubmit: (value: string) => void
}

type ChatSendMessageFormState = {
  message: string
}

export const ChatSendMessageForm = ({ onSubmit }: ChatSendMessageFormProps) => {
  const form = useForm<ChatSendMessageFormState>({
    defaultValues: {
      message: "",
    },
  })

  const handleSubmit: SubmitHandler<ChatSendMessageFormState> = ({ message }) => {
    onSubmit(message)
  }

  return (
    <FormProvider {...form}>
      <View style={{ height: 72, justifyContent: "center", alignItems: "center" }}>
        <Controller
          control={form.control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput style={{ width: "100%" }} onChangeText={onChange} onBlur={onBlur} value={value} />
          )}
          name="message"
        />
      </View>
    </FormProvider>
  )
}
