import React, {useContext} from 'react'
import { StyleSheet, View, Text, Button} from 'react-native'
import Header from '../../components/header'
import {AddRegisterItem} from '../RegistrationComponents/addRegisterItems'



export const RegistrationScreen = () => {

    return(
        <View>
            
            <Header title="Registration Items"/>
            <AddRegisterItem/>
                        
        </View>
    )

}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
    }
    
})


