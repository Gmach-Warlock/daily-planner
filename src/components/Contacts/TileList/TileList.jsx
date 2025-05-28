import Tile from "./Tile/Tile";
import './TileList.css'
import { useContext, useState } from "react";
import { contactsContext } from "../../../App";

export default function TileList() {

    const [contacts, setContacts] = useContext(contactsContext);

    const editTrackInfo = () => {

    }

    return (
        <div className="contact">
            <ul className="contacts-container">
                {contacts.map((contact) => <li key={`${contact.first_name}${contact.last_name}${contact.phone_number}`} className="contact-tile">
                    <Tile 
                        name={contact.name} 
                        email={contact.email}
                        phone_number={contact.phone_number}
                        id={contact.id}
                    /><br/>
                </li>)}
            </ul>

        </div>
    );
}