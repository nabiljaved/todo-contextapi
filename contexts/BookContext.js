import React, {createContext, useState} from 'react'
import {Alert} from 'react-native'

export const BookContext = createContext()


export const BookContextProvider = ({children}) => {

    const [books, setBooks] = useState([
        {id: 1, name: 'gone by wild'},
        {id: 2, name: 'History of 1947 pakistan'},
        {id: 3, name: 'geography level II'},
    ])
    
    const addTodo = (name) => {

        if(name.length > 3){
            setBooks([...books, {id:Math.random(), name:name}])
          }else{
            Alert.alert('Warning', 'Todo Must be over 3 character long', [{text:'Understood', onPress: () => console.log('alert changed')}])  
          }
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id != id))
    }

    return (
        <BookContext.Provider value={{books, removeBook, addTodo}}>
            {children}
        </BookContext.Provider>
    )

}

