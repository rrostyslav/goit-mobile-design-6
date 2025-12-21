import { ScrollView } from "react-native"
import { ChatListRow, ChatListRowProps } from "../ChatListRow"

export type ChatListProps = {
  list: ChatListRowProps[]
}

export const ChatList = ({ list }: ChatListProps) => {
  return (
    <ScrollView>
      {list.map(({ username, lastMessage, userImageUrl, unreadCount }, index) => (
        <ChatListRow
          key={index}
          username={username}
          lastMessage={lastMessage}
          unreadCount={unreadCount}
          userImageUrl={userImageUrl}
        />
      ))}
    </ScrollView>
  )
}
