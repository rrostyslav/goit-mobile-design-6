import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { MessagesList } from "./MessagesList"

const meta = {
  title: "ChatScreen/MessagesList",
  component: MessagesList,
  args: {
    bubbleMaxWidth: 280,
    horizontalPadding: 16,
  },
  decorators: [
    (Story) => (
      <View style={{ height: 400 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MessagesList>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
