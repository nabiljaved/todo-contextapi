import React, {useContext} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { RegistrationContext } from '../../contexts/RegistrationContext';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const RegistrationListItem = ({field}) => {

    const {removeField} = useContext(RegistrationContext)

    return(
        <View style={styles.container}>
            
            <TouchableOpacity onPress={() => removeField(field.id)}>
                <View style={styles.text}>
                <Text>{field.firstName}</Text>
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


