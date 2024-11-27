import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../Context/ContactsContext'
import MessagesList from './MessagesList'

const Chat = () => {
    const {contact_id} = useParams()
    
    //traemos la funcion getContactById del contexto
    const {  addNewMessageToContact, getContactById } = useContext(ContactsContext)

    const contact_selected = getContactById(contact_id)
   

    
    
    const handleSubmitNewMessage = (event) =>{
        event.preventDefault()
        const text = event.target.message.value
        addNewMessageToContact(text, contact_id)

    }
    return (
        <div>
            {
                !contact_selected
                ? <h2>No has seleccionado un contacto</h2>
                : (
                <div>
                    <h1>{contact_selected.name}</h1>
                    <MessagesList 
                        messages={contact_selected.messages} 
                    />
                </div>
                )
            }
            <form onSubmit={handleSubmitNewMessage}>
                <input placeholder='enviar mensaje' id='message' name='message'/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Chat