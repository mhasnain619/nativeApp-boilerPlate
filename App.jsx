import { Alert, Image, StyleSheet, Text, View } from "react-native"
import MyButton from './Components/Button/Button';
const App = () => {
  const clickMe = () => {
    Alert.alert('Alert', 'You clicked me');
    console.log("Button Clicked");

  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This is my native boilerPlate
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
    height: 200,
    resizeMode: 'cover', // or 'cover', 'stretch', etc.
  },
})