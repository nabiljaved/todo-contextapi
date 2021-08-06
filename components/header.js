import React from 'react'
import { StyleSheet, View, Text } from 'react-native'


const Header = ({title}) => {

    return(
        <View style={styles.container}>
             <Text style={styles.textStyle}>{title}</Text>   
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        padding:18,
        backgroundColor:'violet'
    },
    textStyle:{
        textAlign:'center',
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }

})

export default Header