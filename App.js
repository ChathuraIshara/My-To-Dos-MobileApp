import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView, TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddToDo from './components/AddToDo';

export default function App() {

  const [todos,setTodos]=useState([
    {text:"buyCofee",key:1},
    {text:"create an app",key:2},
    {text:"learn flutter",key:3}

  ]);



  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      //console.log("keyboard dismissed!");
    }}>
       <View style={styles.container}>
      <Header></Header>
      <View style={styles.content}>
      <AddToDo setTodos={setTodos}/>
       
        <View style={styles.list}>
       
          <FlatList 
            data={todos}
            renderItem={({item})=>(
              // <TodoItem item={item}></TodoItem>
              //<Text>{item.text}</Text>
              <TodoItem item={item} todo={todos} setTodos={setTodos} ></TodoItem>
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
  content:{

    padding:40,
    flex:1

  },
  list:{
    flex:1,
    marginTop:20,
  }

});
