import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Addtodo from './components/Addtodo';

export default function App() {
   
  const [todos, setTodos] = useState([
    { text: 'Write some codes', key: '1'},
    { text: 'Fix some bugs', key: '2'},
    { text: 'Create an app for one week', key: '3'},
    { text: 'Read a book', key: '4'},
    { text: 'Watch some movies', key: '5'},
    { text: 'Listen to my favourite songs', key: '6'},
    { text: 'Play some games,PES', key: '7'},
    { text: 'Going for a walk', key: '8'},
    { text: 'Study notes for exams', key: '9'},
    { text: 'Do some programming research', key: '10'},
    { text: 'Rest', key: '11'},
    { text: 'Rest again', key: '12'},
    { text: 'and again...', key: '13'}
  ]);  

  const pressHandler = (key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo => todo.key != key);
    })

  }

  const submitHandler = (text) => {
    setTodos((prevTodos)=>{
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Addtodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <Text>Note: You can delete an activity  by clicking it</Text>
          <FlatList 
          data={todos}
          renderItem={( {item} ) => (
            <TodoItem item={item} pressHandler={pressHandler}/>
          )}
          />

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },

});
