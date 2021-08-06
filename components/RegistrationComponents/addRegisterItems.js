import React,  {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { RegistrationContext } from '../../contexts/RegistrationContext';

export const AddRegisterItem = () => {


const {addField, updateField} = useContext(RegistrationContext)

const [text1, setText1] = useState('')
const [text2, setText2] = useState('')
const [text3, setText3] = useState('')
const [text4, setText4] = useState('')
const [text5, setText5] = useState('')
const [text6, setText6] = useState('')

const addData = () => {

    const obj = {
        id: parseInt(Math.random()),
        firstName: text1,
        lastName : text2,
        emailId : text3,
        password: text4,
        roleid : parseInt(text5),
        isActive: text6
    }
    //console.log(obj)
    addField(obj)
}

const updateData = (id) => {

    const obj = {
        id: id,
        firstName: text1,
        lastName : text2,
        emailId : text3,
        password: text4,
        roleid : parseInt(text5),
        isActive: text6
    }

    updateField(obj)
}



    return(
            
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g first name'
                onChangeText={setText1}

            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='e.g last name'
                onChangeText={setText2}
            >
            </TextInput>

            
            <TextInput
                style={styles.input}
                placeholder='email id'
                onChangeText={setText3}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={setText4}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='role id'
                onChangeText={setText5}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='is active'
                onChangeText={setText6}
            >
            </TextInput>

            <Button title='add Fields' color='violet' onPress={addData}/>
            <View style={styles.marginButton}></View>
            <Button onPress={() => updateData(156)} title='Update Fields' color='violet' />
         </View>


            
            
        
              
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
    }, 
    marginButton:{
        marginTop:5
    }  


})