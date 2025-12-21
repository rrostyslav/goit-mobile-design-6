import { ScrollView } from "react-native"
import { useRef, useState } from "react"
import { nanoid } from "nanoid"
import { ChatMessage, Message } from "../Message"

export type MessagesListProps = {
  bubbleMaxWidth: number
  horizontalPadding: number
}

export const MessagesList = ({ bubbleMaxWidth, horizontalPadding }: MessagesListProps) => {
  const scrollRef = useRef<ScrollView>(null)

  const scrollToBottom = () => {
    scrollRef.current?.scrollToEnd({ animated: false })
  }

  const [messages] = useState<ChatMessage[]>(() =>
    Array.from({ length: 100 }, () => ({
      id: nanoid(),
      name: "Test",
      message: "Text text text",
      isOwn: Math.random() > 0.5,
    })),
  )

  return (
    <ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      contentContainerStyle={{
        display: "flex",
        rowGap: 10,
        paddingHorizontal: horizontalPadding,
        paddingBottom: 12,
        flexGrow: 1,
      }}
      onContentSizeChange={scrollToBottom}
      onLayout={scrollToBottom}
    >
      {messages.map((message) => (
        <Message key={message.id} message={message} maxWidth={bubbleMaxWidth} />
      ))}
    </ScrollView>
  )
}
