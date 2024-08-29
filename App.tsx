import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Tho", age: 20 },
    { id: 2, name: "Dung", age: 20 },
    { id: 3, name: "Phuc", age: 22 },
    { id: 4, name: "Duc", age: 24 },
    { id: 5, name: "Duy", age: 20 },
    { id: 6, name: "Ky", age: 20 },
    { id: 7, name: "Hung", age: 21 },
    { id: 8, name: "Hoai", age: 20 },
    { id: 9, name: "Le Duy", age: 20 },
    { id: 10, name: "Thinh", age: 20 },
  ])

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
        Hello React Native
      </Text>
      <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id}
              style={{
                padding: 15,
                backgroundColor: 'pink',
                marginBottom: 30,
              }
              }>
              <Text>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View >
    // ScrollView giúp cho người dùng có thể cuộn chuột và xem xét hết được
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
