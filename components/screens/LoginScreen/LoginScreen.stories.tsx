import type { Meta, StoryObj } from "@storybook/react-native"
import { View } from "react-native"
import { LoginScreen } from "./LoginScreen"

const meta = {
  title: "Screens/LoginScreen",
  component: LoginScreen,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof LoginScreen>

export default meta

type Story = StoryObj<typeof meta>

export const FullScreen: Story = {}
