import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


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
            <View style={styles.item}>
            
            <MaterialIcons name='delete' size={21}  color='#333'/>

            <Text style={styles.itemtext}>{item.text}</Text>

            </View>
           
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
            borderRadius:10,
            flexDirection:'row'
        },
        itemtext:{
            marginLeft:10,
        }
    }
   
);