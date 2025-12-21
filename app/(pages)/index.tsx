import { Button } from "@/components/common/Button"
import { SafeAreaView } from "react-native-safe-area-context"
import { LoginScreen } from "@/components/screens/LoginScreen"
import { ChatsListScreen } from "@/components/screens/ChatsListScreen"
import { ChatScreen } from "@/components/screens/ChatScreen"

export default function Index() {
  return (
    <SafeAreaView>
      <ChatScreen />
    </SafeAreaView>
  )
}
