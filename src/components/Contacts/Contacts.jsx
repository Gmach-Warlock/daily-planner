import { useState, useContext } from "react";
import ContactForm from "./ContactForm/ContactForm";
import TileList from "./TileList/TileList";
import { contactsContext } from "../../App";
import { creatingContactContext } from "../../App";
import styles from './Contacts.module.css';

export default function Contacts(props) {

    const {contacts, setContacts } = useContext(contactsContext)
    const [creatingContact, setCreatingContact] = useContext(creatingContactContext);

    const handleClick = () => {
        if (creatingContact) {
            setCreatingContact(false);
        } else {
            setCreatingContact(true);
        }
        console.log(contacts)
    }

    return (
        <div className={styles.Contacts}>
            <h2>Contacts</h2>
            <div className="contacts-container">
                {creatingContact ? <ContactForm /> : <TileList 
                />}
            </div>
            {creatingContact === false && <button onClick={handleClick}>Create New Contact</button>}
        </div>

    );
}