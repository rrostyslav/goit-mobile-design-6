import { KeyboardAvoidingView, Platform, StyleSheet, useWindowDimensions } from "react-native"
import { ChatSendMessageForm } from "@/components/forms/ChatSendMessageForm"
import { MessagesList } from "./MessagesList"

export const ChatScreen = () => {
  const { width, height } = useWindowDimensions()
  const isLandscape = width > height
  const horizontalPadding = isLandscape ? 24 : 15
  const bubbleMaxWidth = Math.min(width * 0.7, isLandscape ? 420 : 320)
  const orientationKey = `${width}x${height}`

  return (
    <KeyboardAvoidingView
      key={orientationKey}
      style={styles.container}
      behavior={Platform.select({ ios: "padding", android: "height" })}
      keyboardVerticalOffset={0}
    >
      <MessagesList bubbleMaxWidth={bubbleMaxWidth} horizontalPadding={horizontalPadding} />
      <ChatSendMessageForm
        onSubmit={(value) => {
          console.log(value)
        }}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
