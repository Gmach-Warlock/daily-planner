import Tile from "./Tile/Tile";
import { useContext, useState } from "react";
import { contactsContext } from "../../../App";

export default function TileList() {

    const [contacts, setContacts] = useContext(contactsContext);

    const editTrackInfo = () => {

    }

    return (
        <>
            <ul>
                {contacts.map((contact) => <li key={`${contact.first_name}${contact.last_name}${contact.phone_number}`}>
                    <Tile 
                        first_name={contact.first_name} 
                        last_name={contact.last_name} 
                        address={contact.address} 
                        phone_number={contact.phone_number}
                        company={contact.company} 
                        groups={contact.groups} 
                        id={`${contact.first_name}${contact.last_name}`}
                    /><br/>
                </li>)}
            </ul>

        </>
    );
}