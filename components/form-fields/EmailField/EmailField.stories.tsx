import type { Meta, StoryObj } from "@storybook/react-native"
import type { ComponentType } from "react"
import { View } from "react-native"
import { FormProvider, useForm } from "react-hook-form"
import { EmailField } from "./EmailField"

const FormDecorator = (Story: ComponentType) => {
  const form = useForm({
    defaultValues: {
      email: "",
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
  title: "EmailField",
  component: EmailField,
  args: {
    name: "email",
  },
  decorators: [FormDecorator],
} satisfies Meta<typeof EmailField>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
