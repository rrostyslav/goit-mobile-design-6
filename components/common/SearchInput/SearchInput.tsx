import { TextInput, View, StyleSheet, TextInputProps } from "react-native"

export type SearchInputProps = TextInputProps

export const SearchInput = ({ value, onChangeText, placeholder = "Search", ...rest }: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9A9AA0"
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        {...rest}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F6F7F9",
    borderRadius: 999,
    paddingHorizontal: 16,
    height: 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#1C1C1E",
  },
})
