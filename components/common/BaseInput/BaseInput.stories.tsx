import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { BaseInput } from "./BaseInput"

const meta = {
  title: "BaseInput",
  component: BaseInput,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BaseInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {},
}
