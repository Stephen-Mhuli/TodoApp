import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Addtodo from './components/Addtodo';
import Sandbox from './components/Sandbox';

export default function App() {
   
  const [todos, setTodos] = useState([
    { text: 'Write some codes', key: '1'},
    { text: 'Fix some bugs', key: '2'},
    { text: 'Create an app for one week', key: '3'},
    { text: 'Read a book', key: '4'},
    
  ]);  

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })

  }

  const submitHandler = (text) => {

    if(text.length > 2){
      setTodos((prevTodos)=>{
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      })
    }else{
      Alert.alert('OOPS!', 'Task must be atleast 3 characters long')
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
          <Addtodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <Text>Note: You can delete an task  by clicking it</Text>
          <FlatList 
          data={todos}
          renderItem={( {item} ) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />

        </View>

      </View>

    </View>
    </TouchableWithoutFeedback>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },

});
