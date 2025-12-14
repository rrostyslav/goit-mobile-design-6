import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { EmailInput } from "./EmailInput"

const meta = {
  title: "EmailInput",
  component: EmailInput,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof EmailInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
