import { View, StyleSheet, ScrollView } from "react-native"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"
import { ChatSendMessageForm } from "@/components/forms/ChatSendMessageForm"

type MessageProps = {
  name: string
  message: string
  isOwn: boolean
}

const Message = ({ message, name, isOwn }: MessageProps) => {
  return (
    <View
      style={{
        alignItems: isOwn ? "flex-end" : "flex-start",
      }}
    >
      <View
        style={[
          {
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingVertical: 12,
            rowGap: 4,
            minWidth: 100,
            maxWidth: "65%",
          },
          {
            backgroundColor: isOwn ? colors.highlight : colors.neutral,
          },
        ]}
      >
        <Typography name="h5" customColor={isOwn ? "#B4DBFF" : "#71727A"}>
          {name}
        </Typography>
        <Typography name="body-m" color={isOwn ? "neutral" : "black"}>
          {message}
        </Typography>
      </View>
    </View>
  )
}

const MessagesList = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        rowGap: 10,
      }}
    >
      <Message
        name="Test"
        message="Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello "
        isOwn={true}
      />
      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />
      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />
      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={false} />
      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={false} />
      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
      <Message name="Test" message="Hello" isOwn={true} />

      <Message name="Test" message="Hello" isOwn={false} />

      <Message name="Test" message="Hello" isOwn={true} />
    </ScrollView>
  )
}

export const ChatScreen = () => {
  return (
    <View>
      <MessagesList />
      <ChatSendMessageForm onSubmit={() => {}} />
    </View>
  )
}
