import type { Meta, StoryObj } from "@storybook/react-native"
import { fn } from "storybook/test"
import { View } from "react-native"
import { ChatSendMessageForm } from "./ChatSendMessageForm"

const meta = {
  title: "ChatSendMessageForm",
  component: ChatSendMessageForm,
  args: {
    onSubmit: fn(),
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatSendMessageForm>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}
