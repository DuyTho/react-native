import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<number>();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
        Hello React Native
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Text>Input the name: {name}</Text>
        <TextInput
          style={styles.name}
          onChangeText={(value) => setName(value)}
          multiline
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>Input the age: {age}</Text>
        <TextInput
          keyboardType='numeric'
          maxLength={2}
          style={styles.age}
          onChangeText={(value) => setAge(value)}
        />
      </View>
      <View>
        <Text>Press until see the number u like:  {count}</Text>
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
  name: {
    borderColor: 'black',
    borderWidth: 3,
    width: 200,
    fontSize: 15
  },
  age: {
    borderColor: 'black',
    borderWidth: 3,
    width: 200,
    fontSize: 15
  },
});
