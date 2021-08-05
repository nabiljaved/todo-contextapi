import React, {useContext} from 'react'
import { Text, View } from 'react-native'
import { BookContext } from '../contexts/BookContext'
import { ListItem } from './listitem'
import { StyleSheet, ScrollView } from 'react-native'


export const List = () => {

    const {books} = useContext(BookContext)

    const present = books.length ? (
        <View style={styles.container}>
            <ScrollView>
               {books.map(book => <ListItem key={book.id} book={book}/>)}
            </ScrollView>
        </View>   
    ) : (
        <Text>No Books To Read</Text>
    )

    // return books.length ? (
    //     books.map(book => <Text key={book.id}>{book.name}</Text>)
    // ):(
    //     <Text>No Books To Read</Text>
    // )

    return(
        present
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})