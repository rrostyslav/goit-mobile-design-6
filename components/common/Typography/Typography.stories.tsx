import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { Typography } from "./Typography"
import { fontStyles } from "@/design-system/typography"
import { colors } from "@/design-system/colors"

const meta = {
  title: "Typography",
  component: Typography,
  args: {},
  argTypes: {
    name: {
      control: {
        type: "select",
      },
      options: Object.keys(fontStyles),
    },
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(colors),
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    name: "h1",
    children: "The quick brown fox jumps over the lazy dog",
    color: "highlight",
  },
}
