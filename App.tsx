import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

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
    if (!todo) {
      Alert.alert('Lỗi input', 'Todo không được để trống',
        [
          {
            text: 'Hủy',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel'
          },
          {
            text: 'Xác nhận',
            onPress: () => console.log('OK Pressed'),
            style: 'default'
          }
        ]
      )
    }
    setListtodo([...listtodo,
    { id: randomInteger(1, 100000), name: todo }
    ]);
    setTodo('');
  }
  const deleteTodo = (id: number) => {
    const newTodo = listtodo.filter(item => item.id !== id);
    setListtodo(newTodo);
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>Todo App</Text>
        <View style={styles.form}>
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
        <View style={styles.todo}>
          <FlatList
            data={listtodo}
            keyExtractor={item => item.id + ''}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => deleteTodo(item.id)}>
                  <View style={styles.groupTodo}>
                    <Text style={styles.todoItem}>{item.name}</Text>
                    <AntDesign name="close" size={24} color="black" />
                  </View>
                </Pressable>
              )
            }}
          ></FlatList>
        </View>
      </View >
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 60,
  },
  form: {
    // flex: 2
    marginBottom: 20
  },
  todo: {
    flex: 1
  },
  groupTodo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderStyle: 'dashed',
    marginBottom: 15,
    marginHorizontal: 10,
    padding: 10
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
    marginBottom: 20,
  },
  todoItem: {
    fontSize: 20,
  }
});
