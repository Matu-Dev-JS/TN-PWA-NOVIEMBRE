import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../Context/ContactsContext'
import MessagesList from './MessagesList'

const Chat = () => {
    const {contact_id} = useParams()

    //traemos la funcion getContactById del contexto
    const { getContactById } = useContext(ContactsContext)

    const contact_selected = getContactById(contact_id)
   
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
        </div>
    )
}

export default Chat