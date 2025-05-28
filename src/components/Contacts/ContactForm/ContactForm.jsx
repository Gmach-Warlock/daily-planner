import { useState, useContext, useEffect } from 'react';
import { contactsContext, creatingContactContext } from '../../../App';
import './ContactForm.css'

export default function ContactForm() {

    const [contacts, setContacts] = useContext(contactsContext);
    const [creatingContact, setCreatingContact] = useContext(creatingContactContext);
    const [nameInputData, setNameInputData] = useState('');
    const [emailInputData, setEmailInputData] = useState()
    const [phoneNumberInputData, setPhoneNumberInputData] = useState('');

    const handleClick = () => {
        if (nameInputData && nameInputData.trim().length > 1) {

            setContacts((prevState) => [...prevState, {
                name: nameInputData, 
                email: emailInputData, 
                phone_number: phoneNumberInputData, 
                id: `${nameInputData}${emailInputData}${phoneNumberInputData}`
            }])

            setCreatingContact(false);
            setNameInputData('');
            setEmailInputData('');
            setPhoneNumberInputData('');

            
            console.log(emailInputData);

            console.log(contacts)
        } else {
            alert('Please fill out the required information!')
        }
    }

    useEffect(() => {
        setNameInputData('');
        setEmailInputData('');
        setPhoneNumberInputData('');
    }, [contacts])

    return (
        <div className="new-contact-form">

                
            <input 
                type="text" 
                name="new-contact-name-input" 
                id="new-contact-name-input" 
                onChange={e => {
                    return setNameInputData(e.target.value);
                }}
                required 
                placeholder='Enter your Full Name'
            /> <br />
            <label 
                htmlFor="new-contact-name-input" 

            >Name</label><br />

            <input 
                type="text" 
                name="new-contact-email-input" 
                id="new-contact-email-input" 
                onChange={e => {
                    return setEmailInputData(e.target.value);
                }}
                required 
                placeholder='Enter your Email'
            /><br />
            <label 
                htmlFor="new-contact-address-input"
            >Email</label><br />

            <input 
                type="text" 
                name="new-contact-phone_number-input" 
                id="new-contact-phone_number-input" 
                onChange={e => {
                    return setPhoneNumberInputData(e.target.value);
                }}
                required
                // regex is for US phone numbers
                pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
                placeholder="Phone (###-###-####)"
                aria-label="Contact Phone"
            /><br />
            <label 
                htmlFor="new-contact-phone_number-input"
            >Phone Number</label><br />


            <button 
                className='button button-create-contact' 
                onClick={handleClick}
            >Create Contact</button>


        </div>
    );
};