import React, {useContext} from 'react'
import Header from './components/header'
import { BookContextProvider } from './contexts/BookContext'
import {List} from './components/list'
import {AddItem} from './components/additem'

const App = () => {
    return(      
      
        <BookContextProvider>     
         <Header/>
         <AddItem/>
         <List/>
       </BookContextProvider>
      
    )
}

export default App
