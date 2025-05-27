import { contactsContext } from "../../../../App";
import { useState, useContext } from "react";


export default function Tile(props) {

// state variables
    
const [contacts, setContacts] = useContext(contactsContext);
const [editingContact, setEditingContact] = useState(false);
const [firstNameData, setFirstNameData] = useState('');
const [lastNameData, setLastNameData] = useState('');
const [addressData, setAddressData] = useState('');
const [phoneNumberData, setPhoneNumberData] = useState('');
const [companyData, setCompanyData] = useState('');
const [groupsData, setGroupsData] = useState([]);


const callEditForm = () => {
    setEditingContact(true);
}

const deleteContact = (id) => {

    console.log(contacts)
    console.log(id)
    
    setContacts(() => contacts.filter(contact => contact.id === id))

    setEditingContact(false);

}
    
 return (
    <>
        {editingContact === false ? <div>
            
            <h3>{`${props.first_name} ${props.last_name}`}</h3>
            <span>{props.address}</span><br />
            <span>{props.phone_number}</span><br />
            <span>{props.company}</span><br />
            <span>{props.groups}</span><br />
            {editingContact === false && <button onClick={callEditForm}>Edit</button>}
            <button onClick={() => deleteContact(props.id)}>Delete</button>

        </div> : 

        <div>

            <input 
                type="text" 
                name="new-contact-first-name-input" 
                id="new-contact-name-input" 
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
                name="new-contact-last-name-input" 
                id="new-contact-last-name-input" 
                onChange={e => {
                    return setLastNameData(e.target.value);
                }}    
            /><br />
            <label 
                htmlFor="new-contact-last-name-input"
            >Last Name</label><br />

            <input 
                type="text" 
                name="new-contact-address-input" 
                id="new-contact-address-input" 
                onChange={e => {
                    return setAddressData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-address-input"
            >Address</label><br />

            <input 
                type="text" 
                name="new-contact-phone_number-input" 
                id="new-contact-phone_number-input" 
                onChange={e => {
                    return setPhoneNumberData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-phone_number-input"
            >Phone Number</label><br />

            <input 
                type="text" 
                name="new-contact-company-input" 
                id="new-contact-company-input" 
                onChange={e => {
                    return setCompanyData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-company-input"
            >Company</label><br />

            <input 
                type="text" 
                name="new-contact-groups-input" 
                id="new-contact-groups-input" 
                onChange={e => {
                    return setGroupsData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-groups-input"
            >Groups</label><br />

            <button 
                onClick={editContact}
            >Update</button>


        </div>

        } 

    </>

        
 );
};