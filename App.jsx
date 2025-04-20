import { StyleSheet, Text, View } from "react-native"

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is my native App
      </Text>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 20,
    color: "#333",

  }
})