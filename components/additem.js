import React,  {useState, useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {BookContext} from '../contexts/BookContext'
import { TouchableWithoutFeedback, keyboard, Alert } from 'react-native'


export const AddItem = () => {

const {addTodo} = useContext(BookContext)

const [text, setText] = useState('')

const textHandler = (val) => {
    setText(val)

}

const sendTodo = () => {
    if(text.length <=0){
        Alert.alert('Warning', 'Todo Must be over 3 character long', [{text:'Understood', onPress: () => console.log('alert changed')}])  
        return 
    }else{
        addTodo(text)

    }
}

    return (
        <TouchableWithoutFeedback>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g todo'
                onChangeText={textHandler}
            >
            </TextInput>
            <Button onPress={() => {sendTodo()}} title='add todo' color='violet'/>
        </View>
  

        </TouchableWithoutFeedback>      
    )   
}

const styles = StyleSheet.create({

    container:{
        padding:10
    },

    input : {
        marginBottom: 10, 
        paddingHorizontal: 8, 
        paddingVertical:6,
        borderBottomWidth:1, 
        borderBottomColor: '#ddd'
    }


})