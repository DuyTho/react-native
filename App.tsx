import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [infor, setInfor] = useState({
    name: 'Duy Tho',
    age: 20,
    adress: 'HCM'
  });
  const [count, setCount] = useState<number>(0)


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
        Hello React Native
      </Text>
      <Text>My name is {infor.name}</Text>
      <Text>I'm {infor.age}</Text>
      <Text>I live in {infor.adress}</Text>
      <Text>Press until the number {count}</Text>
      <View>
        <Button
          color={"blue"}
          title='increase'
          onPress={() => setCount(count + 1)} />
      </View>
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

});
