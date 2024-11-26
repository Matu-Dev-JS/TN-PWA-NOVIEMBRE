import React from 'react'
import ContactList from '../Components/ContactList'
import Chat from '../Components/Chat'
import contacts from '../data/contactData'

const ChatScreen = () => {


    return (
        <div>
            <div>
                <h1>Lista de contactos</h1>
                <ContactList/>
            </div>
            <div>
                <Chat/>
            </div>
            
        </div>
    )
}

export default ChatScreen