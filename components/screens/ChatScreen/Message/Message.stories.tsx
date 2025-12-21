import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { Message } from "./Message"

const meta = {
  title: "ChatScreen/Message",
  component: Message,
  args: {
    message: {
      id: "1",
      name: "Alex",
      message: "Looks good. I'll send the final version soon.",
      isOwn: true,
    },
    maxWidth: 280,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Message>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
