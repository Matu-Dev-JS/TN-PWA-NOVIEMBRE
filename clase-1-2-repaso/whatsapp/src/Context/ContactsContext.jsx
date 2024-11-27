import { createContext, useEffect, useState } from "react";
import contacts from "../data/contactData";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";

const ContactsContext = createContext();

const ContactsContextProvider = ({children}) => {

    const [contacts_state, setContactsState] = useState(contacts)


    //Ahora cuando cambien mis contactos o los mensajes de mis contactos SIEMPRE DEBO CAMBIAR EL ESTADO

    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id)
        )
    }


    

    const addNewMessageToContact = (text, contact_id) => {
        //Desarrollar de tarea
        //Pista van setContactsState

        const new_message = {
            author: 'YO', 
            text: text, 
            id: uuidv4(),
            time: new Date().toLocaleString()
        }
        setContactsState(
            (prev_contacts_state) => {
              
                const contact_found = prev_contacts_state.find(contact =>  contact.id == contact_id)
                contact_found.messages.push(new_message)
                
                return [...prev_contacts_state]//No estoy devolviendo un nuevo valor, devuelvo el estado previo
            }
        )
    }

    
    return (    
        <ContactsContext.Provider value={
                {
                    contacts_state,
                    getContactById: getContactById,
                    addNewMessageToContact: addNewMessageToContact
                }
            } 
        >
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContext, ContactsContextProvider}

