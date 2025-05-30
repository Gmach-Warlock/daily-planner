import { useState, useContext } from "react";
import ContactForm from "./ContactForm/ContactForm";
import TileList from "./TileList/TileList";
import { contactsContext } from "../../App";
import './Contacts.css'

export default function Contacts() {

    const [contacts, setContacts] = useContext(contactsContext)

    const handleClick = () => {
        if (creatingContact) {
            setCreatingContact(false);
        } else {
            setCreatingContact(true);
        }
        console.log(contacts)
    }

    return (
        <div className="contacts-section">
            <h2>Contacts</h2>
            <div className="flex-column">
                <ContactForm />
                <TileList 
                    arrayToIterate={contacts}
                    test='test'
                />
            </div>
        </div>

    );
}