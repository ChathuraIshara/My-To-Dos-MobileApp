import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button,ScrollView,Alert,TouchableWithoutFeedback } from 'react-native';

export default function AddToDo({setTodos})
{
    const [text,setText]=useState("");

    const textHandler=(val)=>
    {
        setText(val);
    }

    const submitToDo=()=>
    {
        if(text.length>3)
        {
            setTodos((prevtodos)=>{
           
                return [
                    {text:text,key:Math.random().toString()},
                    ...prevtodos
                ]
            }
            )
        }
        
        
            
            else{
                Alert.alert("OOPS","Todos must be over 3 chars long",[
                    {text:"Understood",onPress:()=>console.log('alert closed!')} 
                ]);

            }
       
       

    }


    return  <View>
        <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={textHandler}
         />
        <Button color="coral" onPress={submitToDo} title="Add ToDo"/>

    </View>
    
}

const styles=StyleSheet.create({
    input: {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',

    }
});