import React, {createContext, useState} from 'react'
import {Alert} from 'react-native'

export const RegistrationContext = createContext()


export const RegistrationContextProvider = ({children}) => {

    const [fields, setFields] = useState([
        // {id: 1, firstName: 'nabeel', lastName: 'javed', emailId: 'nabeeljaved2019@gmail.com', password: '123456', roleId: 2, isActive: true},
        // {id: 2, firstName: 'jenny', lastName: 'ashley', emailId: 'jenny@gmail.com', password: '123456', roleId: 2, isActive: true},
    ],)

    const addField = (field) => {

        console.log(field)

        if(field){
            setFields([...fields, field])
          }else{
            Alert.alert('Warning', 'Fields Must be over 3 character long', [{text:'ok', onPress: () => console.log('alert changed')}])  
          }
    }

    const removeField = (id) => {
        setFields(fields.filter(field => field.id != id))
    }

    const updateField = (field) => {
        let newField = fields.findIndex(obj => obj.id === field.id)
        fields.splice(newField, 1)
        setFields([field, ...fields])
    }

    return (
        <RegistrationContext.Provider value={{fields, addField, removeField, setFields, updateField}}>
            {children}
        </RegistrationContext.Provider>
    )

}

