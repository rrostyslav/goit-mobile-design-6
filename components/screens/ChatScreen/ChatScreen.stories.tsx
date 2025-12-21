import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { ChatScreen } from "./ChatScreen"

const meta = {
  title: "Screens/ChatScreen",
  component: ChatScreen,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatScreen>

export default meta

type Story = StoryObj<typeof meta>

export const FullScreen: Story = {}
