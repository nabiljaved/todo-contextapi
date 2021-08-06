import React, {useContext} from 'react'
import Header from './components/header'
import { BookContextProvider } from './contexts/BookContext'
import {List} from './components/list'
import {AddItem} from './components/additem'
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { RegistrationScreen } from './components/RegistrationComponents/RegistrationScreen'
import { RegistrationContextProvider } from './contexts/RegistrationContext'
import { RegistrationList } from './components/RegistrationComponents/RegistrationList'
import { CategoryScreenScreen } from './components/CategoryComponent/CategoryScreen'
import { UploadImageScreen } from './components/UploadImageComponent/uploadImageScreen'

const App = () => {
    return(      
      
    //     <BookContextProvider>     
    //      <Header/>
    //      <AddItem/>
    //      <List/>
    //    </BookContextProvider>
        
        // <RegistrationContextProvider>
        //     <RegistrationScreen/>
        //     <RegistrationList/>
        // </RegistrationContextProvider>

        // <CategoryScreenScreen/>
        <UploadImageScreen/>
    )
}

export default App
