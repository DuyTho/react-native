import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>DuyTho</Text>
        <Text style={styles.dad}>
          I'm starting to learn React Native.
          <Text style={styles.child}> I will conquer it!</Text>
        </Text>
      </View>
      <Text style={styles.hello1}>HELOOOOOOOOOOOO!</Text>
      <Text>Hello World Duy Tho</Text>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello1: {
    color: 'red',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'green'
  },
  dad: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'yellow'
  },
  child: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'blue'
  }
});
