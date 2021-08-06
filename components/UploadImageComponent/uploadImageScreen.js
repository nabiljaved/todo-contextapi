import React, {useState} from 'react'
import {Text, StyleSheet, View, TextInput, Button, Keyboard} from 'react-native'
import axios from 'axios'
import Header from '../header'


export const UploadImageScreen = () => {

const [description, setDescription] = useState('')
const [categoryid, setCategoryId] = useState('')
const [subcategoryid, setSubCategoryId] = useState('')
const [apiresponse, setResponse] = useState('')


const upload = () => {

    const obj = {
        description : description, 
        categoryID : parseInt(categoryid),
        subCategoryID : parseInt(subcategoryid)
    }

    //console.log(obj)

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/x-www-form-urlencoded'
      }

      const URI = 'http://assetsuploader.markematics.net/api/v1/UploadImage'

    
      axios.post(URI, JSON.stringify(obj), {
        headers: headers
      })
      .then((response) => {
        setResponse(response)  
        //console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

}

    return (

        <>
        <Header title="Upload An Image"/>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g description'
                onChangeText={setDescription}
            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='e.g category id'
                onChangeText={setCategoryId}
                keyboardType="numeric"

            >
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='e.g sub category id'
                onChangeText={setSubCategoryId}
                keyboardType="numeric"

            >
            </TextInput>

            <Button title='upload image' color='violet' onPress={upload}/>

            <View>
                {apiresponse && apiresponse !== '' ? 
                <Text style={styles.responseContainer}>
                    {apiresponse.data}
                </Text>
                : 
                <Text>Data is not Uploaded</Text> }                
            </View>    

        </View>
        </>

        
    )

    

}


const styles = StyleSheet.create({

    responseContainer:{
        padding:10,
        borderWidth:1,
        borderStyle:'dotted',
        marginTop:5,
        borderRadius:20
    },
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