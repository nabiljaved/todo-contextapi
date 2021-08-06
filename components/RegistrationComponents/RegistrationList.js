import React, {useContext, useEffect, useState} from 'react'
import { Text, View } from 'react-native'
import { RegistrationContext } from '../../contexts/RegistrationContext';
import { StyleSheet, ScrollView } from 'react-native'
import { RegistrationListItem } from './RegistrationListItem';
import axios from 'axios';

export const RegistrationList = () => {

    const {fields, addField, setFields} = useContext(RegistrationContext)

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://assetsuploader.markematics.net/api/v1/users')
            .then(res => {
                setFields(res.data.slice(0,3))
                //console.log(res.data.slice(0,1))
            })
            .catch(err => console.log(err));   
    }, [])

    const present = fields.length ? (
   <View style={styles.container}>
        <ScrollView>
           {fields.map(field => <RegistrationListItem key={field.id} field={field}/>)}
        </ScrollView>
    </View>   

    ) : (
        <Text style={{padding: 10}}>No Fields To Read</Text>
    )


    return(
        present
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})