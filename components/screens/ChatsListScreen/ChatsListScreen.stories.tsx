import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { ChatsListScreen } from "./ChatsListScreen"

const meta = {
  title: "Screens/ChatsListScreen",
  component: ChatsListScreen,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ChatsListScreen>

export default meta

type Story = StoryObj<typeof meta>

export const FullScreen: Story = {}
