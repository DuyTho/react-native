import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

interface ITodo {
  id: number,
  name: string
}
export default function App() {
  const [todo, setTodo] = useState('');
  const [listtodo, setListtodo] = useState<ITodo[]>([]);
  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleAddTodo = () => {
    if (!todo) return;
    setListtodo([...listtodo, { id: randomInteger(1, 100), name: todo }]);
    setTodo('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo App</Text>
      <View style={styles.body}>
        <TextInput
          value={todo}
          style={styles.TodoInput}
          onChangeText={(value) => setTodo(value)}
        >
        </TextInput>
        <Button
          title='Add todo'
          onPress={handleAddTodo}
        />
      </View>
      <View style={styles.body}>
        <FlatList
          data={listtodo}
          keyExtractor={item => item.id + ''}
          renderItem={({ item }) => {
            return (
              <Text style={styles.todoItem}>{item.name}</Text>
            )
          }}
        ></FlatList>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60

  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  TodoInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'green',
    fontSize: 15,
    padding: 5,
    margin: 15
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  todoItem: {
    fontSize: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 10
  }
});
