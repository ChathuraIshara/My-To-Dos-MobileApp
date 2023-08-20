import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';


export default function TodoItem({item,todos,setTodos})
{

    const pressHandler=()=>
    {
        setTodos((prevtodos)=>{
            return prevtodos.filter((todo)=>item.key!=todo.key);
        });


    }


    return(
        <TouchableOpacity onPress={pressHandler}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );


     

      
          
    
}

const styles=StyleSheet.create(
    {
        item:{
            padding:16,
            marginTop:16,
            borderColor:'#bbb',
            borderWidth:1,
            borderRadius:10
        }
    }
   
);