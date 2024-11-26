import React, { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import Contact from './Contact'

const ContactList = () => {
    //Para usar el contexto llamamos a useContext y le pasamos el contexto que queremos usar o consumir
    //Nos devolvera el valor que el Provider tenga como valor en la propiedad value
    const {contacts_state} = useContext(ContactsContext)

    return (
        <div>
            {
                contacts_state.map(contact => {
                    return (
                        <Contact 
                            name={contact.name} 
                            id={contact.id}
                            key={contact.id}
                        />
                    )
                })
            }
        </div>
    )
}

export default ContactList