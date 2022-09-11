import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TextInputComponent, TouchableOpacity, View } from 'react-native';
import concert from './assets/concert.png'
import * as SplashScreen from 'expo-splash-screen'

const App = () => {
  const [total, setTotal] = useState();
  const [show, setShow] = useState(false);

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000)

  function onChange(event) {
     setTotal((event * 99.99).toFixed(2))
     setShow(false)
  };
    return(
      <View style={styles.container}>
        <Text style={styles.titleText}>Ticket Vault</Text>
        <TextInput style={styles.input} onChangeText={value => onChange(value)} placeholder='Number of Tickets'></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>setShow(true)}
        >
          <Text style={styles.buttonText}>Find the Cost</Text>
        </TouchableOpacity>
        {
          show?
          <Text style={styles.returnText}>Ticket Cost: ${total}</Text>
          :<Text style={styles.returnText}></Text>
        }
        <Image source={concert}></Image>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5
  },
  button: {
    backgroundColor: "#f98b88",
    height: 45,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  returnText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 45
  }
})

export default App;
