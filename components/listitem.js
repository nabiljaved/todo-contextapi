import React, {useContext} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { BookContext } from '../contexts/BookContext'
import Icon from 'react-native-vector-icons/MaterialIcons';


export const ListItem = ({book}) => {

    const {removeBook} = useContext(BookContext)

    return(
        <View style={styles.container}>
            
            <TouchableOpacity onPress={() => removeBook(book.id)}>
                <View style={styles.text}>
                <Text>{book.name}</Text>
                <Icon name="delete" size={24} type="ionicon" color="red" />
                </View>
            </TouchableOpacity>
                        
        </View>
    )

}

const styles = StyleSheet.create({
    
    container:{
        padding:5,
        
        
    },
    text:{
        padding:20,
        borderColor:'black',
        borderWidth:1,
        borderRadius:20,
        borderStyle:'dotted',
        margin:2, 
        flexDirection:'row',
        justifyContent:'space-between',
        color:'black'
        
    }
})


