import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import TileList from "./TileList/TileList";

export default function Contacts() {
    const [creatingContact, setCreatingContact] = useState(true);

    return (
        <>
            <h2>Contacts</h2>
            <div className="contacts-container">
                {creatingContact ? <ContactForm /> : <TileList />}
            </div>
            <button>Create New Contact</button>
        </>

    );
}