import React, {useContext, useState, useEffect} from 'react'
import {TouchableOpacity, StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList, SafeAreaView} from 'react-native'
import Header from '../../components/header'
import axios from 'axios';


export const CategoryScreenScreen = () => {


    const [text, changeText] = useState('')

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://assetsuploader.markematics.net/api/v1/Category')
            .then(res => {
                setCategories(res.data.slice(0,3))
                //console.log(categories)
            })
            .catch(err => console.log(err));   
    }, [])


    const addCategory = () => {

        const obj = {
            id: Math.random,
            categoryName : text
        }
        setCategories(prevState => {
            return [...prevState, obj]
        })
    }

    const removeCategory = (item) => {
        setCategories(categories.filter(category => category.categoryid != item.categoryid))
        console.log(item.categoryid)
    }

    const present = categories.length ? (
        <View>
            
            <FlatList
                data={categories}
                renderItem={({item}) => {
                    return <TouchableOpacity key ={item.categoryid} onPress={() => removeCategory(item)}>
                <View style={styles.item}>
                <Text style={styles.itemtext}>{item.categoryName}</Text>
                </View>
            </TouchableOpacity>
                } }
                keyExtractor={item => item.categoryid}
           />
            
        </View>   
    ) : (
        <Text>No category To Read</Text>
    )



    return (
    
        <>
        <Header title="Category Item"/>
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='e.g category'
                onChangeText={changeText}
            >
            </TextInput>
            <Button  title='add Category' color='violet' onPress={() => addCategory()}/>
            {present}
        </View>
        </>
        

              
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
    item:{
        padding:16,
        marginTop:16, 
        borderColor:'#bbb', 
        borderWidth:1, 
        borderStyle:'dashed', 
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    itemtext:{
        marginLeft:10
    }


})


