import type { Meta, StoryObj } from "@storybook/react-native"
import type { ComponentType } from "react"
import { View } from "react-native"
import { FormProvider, useForm } from "react-hook-form"
import { PasswordField } from "./PasswordField"

const FormDecorator = (Story: ComponentType) => {
  const form = useForm({
    defaultValues: {
      password: "",
    },
  })

  return (
    <FormProvider {...form}>
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    </FormProvider>
  )
}

const meta = {
  title: "PasswordField",
  component: PasswordField,
  args: {
    name: "password",
  },
  decorators: [FormDecorator],
} satisfies Meta<typeof PasswordField>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
