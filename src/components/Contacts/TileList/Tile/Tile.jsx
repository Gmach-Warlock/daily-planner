import { contactsContext } from "../../../../App";
import { useState, useContext } from "react";
import './Tile.css'

export default function Tile(props) {

    // state variables
        
    const [contacts, setContacts] = useContext(contactsContext);
    const [editingContact, setEditingContact] = useState(false);
    const [firstNameData, setFirstNameData] = useState('');
    const [lastNameData, setLastNameData] = useState('');
    const [emailData, setEmailData] = useState('')
    const [addressData, setAddressData] = useState('');
    const [phoneNumberData, setPhoneNumberData] = useState('');
    const [companyData, setCompanyData] = useState('');
    const [groupsData, setGroupsData] = useState([]);

    // callEditForm function displays the form for editing a contact

    const callEditForm = () => {
        setEditingContact(true);
    }

    const editContact = (id) => {
        const indexOfContactToEdit = contacts.findIndex(c => c.id === id);

        const editedContact = {
            first_name: firstNameData, 
            last_name: lastNameData, 
            email: emailData, 
            address: addressData, 
            phone_number: phoneNumberData, 
            company: companyData, 
            groups: groupsData, 
            id: `${firstNameData}${lastNameData}${contacts.length}`
        }
        console.log(props.id)
        console.log(editedContact)
        console.log(indexOfContactToEdit)
        setContacts(() => contacts.filter(c => c.id != id))

        setEditingContact(false)
    }

    // deleteContact 

    const deleteContact = (id) => {
        
        setContacts(() => contacts.filter(c => c.id !== id))

        setEditingContact(false);

    }
    
 return (
    <div className="tile">
        {editingContact === false ? <div>
            
            <h3>{props.name}</h3>
            <span>{props.email}</span><br />
            <span>{props.phone_number}</span><br />
            {editingContact === false && <button onClick={callEditForm}>Edit</button>}
            <button onClick={() => deleteContact(props.id)}>Delete</button>

        </div> : 

        <div>

            <input 
                type="text" 
                name="edit-contact-first-name-input" 
                id="edit-contact-name-input" 
                onChange={e => {
                    return setFirstNameData(e.target.value);
                }}
                required
            /> <br />
            <label 
                htmlFor="new-contact-name-input" 

            >First Name</label><br />

            <input 
                type="text" 
                name="edit-contact-last-name-input" 
                id="edit-contact-last-name-input" 
                onChange={e => {
                    return setLastNameData(e.target.value);
                }}    
            /><br />
            <label 
                htmlFor="edit-contact-last-name-input"
            >Last Name</label><br />

            <input 
                type="text" 
                name="edit-contact-email-input" 
                id="edit-contact-address-input" 
                onChange={e => {
                    return setEmailData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="edit-contact-email-input"
            >Email</label><br />

            <input 
                type="text" 
                name="edit-contact-phone_number-input" 
                id="edit-contact-phone_number-input" 
                onChange={e => {
                    return setPhoneNumberData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-phone_number-input"
            >Phone Number</label><br />

            <input 
                type="text" 
                name="edit-contact-address-input" 
                id="edit-contact-address-input" 
                onChange={e => {
                    return setAddressData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="edit-contact-address-input"
            >Address</label><br />

            <input 
                type="text" 
                name="edit-contact-company-input" 
                id="edit-contact-company-input" 
                onChange={e => {
                    return setCompanyData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="edit-contact-company-input"
            >Company</label><br />

            <input 
                type="text" 
                name="edit-contact-groups-input" 
                id="edit-contact-groups-input" 
                onChange={e => {
                    return setGroupsData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="edit-contact-groups-input"
            >Groups</label><br />

            <button 
                onClick={() => editContact(props.id)}
            >Update</button>


        </div>

        } 

    </div>

        
 );
};