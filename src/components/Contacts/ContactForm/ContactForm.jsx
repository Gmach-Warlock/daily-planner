import styles from './ContactForm.module.css'
import { useState, useContext } from 'react';
import { contactsContext, creatingContactContext } from '../../../App';


export default function ContactForm() {

    const [creatingContact, setCreatingContact] = useContext(creatingContactContext);
    const [firstNameInputData, setFirstNameInputData] = useState('');
    const [lastNameInputData, setLastNameInputData] = useState('');
    const [addressInputData, setAddressInputData] = useState('');
    const [phoneNumberInputData, setPhoneNumberInputData] = useState('');
    const [companyInputData, setCompanyInputData] = useState('');
    const [groupsInputData, setGroupsInputData] = useState([]);
    const [contacts, setContacts] = useContext(contactsContext)

    const handleClick = () => {
        if (firstNameInputData && firstNameInputData.trim().length > 1) {

            setContacts((prevState) => [...prevState, {
                first_name: firstNameInputData, 
                last_name: lastNameInputData, 
                address: addressInputData, 
                phone_number: phoneNumberInputData, 
                company: companyInputData, 
                groups: groupsInputData
            }])

            setCreatingContact(false);

            console.log(contacts)
            } else {
                alert('Please fill out the required information!')
            }
    }

    return (
        <div className={styles.ContactForm}>

            <input 
                type="text" 
                name="new-contact-first-name-input" 
                id="new-contact-name-input" 
                onChange={e => {
                    return setFirstNameInputData(e.target.value);
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
                    return setLastNameInputData(e.target.value);
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
                    return setAddressInputData(e.target.value);
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
                    return setPhoneNumberInputData(e.target.value);
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
                    return setCompanyInputData(e.target.value);
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
                    return setGroupsInputData(e.target.value);
                }}
            /><br />
            <label 
                htmlFor="new-contact-groups-input"
            >Groups</label><br />

            <button 
                className={styles.buttonCreateNewContact} 
                onClick={handleClick}
            >Create Contact</button>


        </div>
    );
};