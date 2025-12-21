import type { Meta, StoryObj } from "@storybook/react-native"
import type { ComponentType } from "react"
import { fn } from "storybook/test"
import { View } from "react-native"
import { FormProvider, useForm } from "react-hook-form"
import { SearchField } from "./SearchField"

const FormDecorator = (Story: ComponentType) => {
  const form = useForm({
    defaultValues: {
      searchLine: "",
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
  title: "SearchField",
  component: SearchField,
  args: {
    name: "searchLine",
    onSubmitEditing: fn(),
  },
  decorators: [FormDecorator],
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
