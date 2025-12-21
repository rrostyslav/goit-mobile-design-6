import { View } from "react-native"
import { SearchForm } from "@/components/forms/SearchForm"
import { ChatList } from "./ChatList"

export const ChatsListScreen = () => {
  return (
    <View style={{ rowGap: 12 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <SearchForm
          onSearch={(value) => {
            console.log(value)
          }}
        />
      </View>
      <ChatList
        list={Array.from({ length: 100 }, () => ({
          username: "Test",
          lastMessage:
            "Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test ",
          unreadCount: 9,
        }))}
      />
    </View>
  )
}
