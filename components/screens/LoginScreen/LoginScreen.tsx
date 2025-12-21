import { LoginForm } from "@/components/forms/LoginForm"
import { View, StyleSheet } from "react-native"
import { Typography } from "@/components/common/Typography"
import { colors } from "@/design-system/colors"

export const LoginScreen = () => {
  return (
    <View>
      <View style={styles.welcomeImage}>
        <Typography name="h4" color="black">
          [Image of app here]
        </Typography>
      </View>
      <LoginForm />
    </View>
  )
}

export const styles = StyleSheet.create({
  welcomeImage: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.highlight,
  },
})
