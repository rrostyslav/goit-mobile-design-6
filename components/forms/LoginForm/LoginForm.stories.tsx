import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { LoginForm } from "./LoginForm"

const meta = {
  title: "LoginForm",
  component: LoginForm,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
