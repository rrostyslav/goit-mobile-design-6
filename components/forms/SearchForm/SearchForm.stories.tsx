import type { Meta, StoryObj } from "@storybook/react-native"
import { fn } from "storybook/test"
import { View } from "react-native"
import { SearchForm } from "./SearchForm"

const meta = {
  title: "SearchForm",
  component: SearchForm,
  args: {
    onSearch: fn(),
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SearchForm>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
