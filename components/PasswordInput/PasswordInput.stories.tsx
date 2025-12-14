import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { PasswordInput } from "./PasswordInput"

const meta = {
  title: "PasswordInput",
  component: PasswordInput,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof PasswordInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
