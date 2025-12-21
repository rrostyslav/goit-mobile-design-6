import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { SearchInput } from "./SearchInput"

const meta = {
  title: "SearchInput",
  component: SearchInput,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SearchInput>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: { value: "", onChangeText: () => {} },
}
