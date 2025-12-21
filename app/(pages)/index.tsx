import { Button } from "@/components/common/Button"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LoginScreen } from "@/components/screens/LoginScreen"
import { ChatsListScreen } from "@/components/screens/ChatsListScreen"
import { ChatScreen } from "@/components/screens/ChatScreen"

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatsListScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
