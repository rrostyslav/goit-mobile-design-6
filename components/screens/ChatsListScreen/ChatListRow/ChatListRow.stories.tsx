import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { ChatListRow } from "./ChatListRow"

const meta = {
  title: "ChatListRow",
  component: ChatListRow,
  args: {
    username: "Jane Cooper",
    lastMessage: "Hey! Are we still on for tomorrow?",
    unreadCount: 2,
  },
  decorators: [
    (Story) => (
      <View style={{ paddingVertical: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatListRow>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
