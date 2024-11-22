import { createContext, useState } from "react";
import contacts from "../data/contactData";

const ContactsContext = createContext();

const ContactsContextProvider = ({children}) => {

    const [contacts_state, setContactsState] = useState(contacts)
    //Ahora cuando cambien mis contactos o los mensajes de mis contactos SIEMPRE DEBO CAMBIAR EL ESTADO

    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id)
        )
    }

    const addNewMessageToContact = (contact_id, text) => {
        //Desarrollar de tarea
        //Pista van setContactsState
    }

    return (    
        <ContactsContext.Provider value={
                {
                    contacts_state: contacts_state,
                    getContactById: getContactById
                }
            } 
        >
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContext, ContactsContextProvider}

