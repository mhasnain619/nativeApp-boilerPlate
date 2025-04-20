import { Alert, Image, StatusBar, StyleSheet, Text, View } from "react-native"
import MyButton from './Components/Button/Button';
import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);
  const clickMe = () => {
    setCount(count + 1);

  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='aqua' />
      <Text style={styles.text}>
        {count}
      </Text>
      <Image source={require('./Components/Images/imag.jpg')} style={styles.image} />
      <MyButton onPress={() => clickMe()} title='Order Now' />
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "900"
  },
  image: {
    width: 200,
    height: 400,
    resizeMode: "stretch",
  },
})