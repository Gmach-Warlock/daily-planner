import { useState, useContext, useMemo } from 'react';
import { appointmentsContext } from '../../../App';
import './AppointmentForm.css';
import { contactsContext } from '../../../App';
import { DropdownContacts } from '../../DropdownContacts/DropdownContacts';

export default function AppointmentForm() {

    // state variables

    const [appointments, setAppointments] = useContext(appointmentsContext);
    const [contacts, setContacts] = useContext(contactsContext);
    const [nameData, setNameData] = useState('');
    const [contactData, setContactData] = useState('');
    const [dateData, setDateData] = useState('');
    const [timeData, setTimeData] = useState('');

    const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    };


    const contactNames = useMemo(() => {
        return contacts.map((contact) => contact.name);
    }, [contacts]);

    const createAppointment = () => {

        setAppointments((prev) => [...prev, {
            name: nameData, 
            contact: contactData, 
            date: dateData, 
            time: timeData
        }]);

        setNameData('');
        setContactData('');
        setDateData('');
        setTimeData('');



        console.log(appointments)
    }

    return (
        <div className="appointment-form"> 

            <input 
                type="text" 
                id="new-appointment-name-input" 
                name="new-appointment-name-input" 
                value={nameData}
                onChange={(e) => setNameData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-name-input">Name</label><br />


            <DropdownContacts 
                name="contact"
                value={contactData}
                contacts={contactNames}
                onChange={(e) => setContactData(e.target.value)}
            />

            <label htmlFor="new-appointment-contact-input">Contact</label><br />

            <input 
                type="date" 
                id="new-appointment-date-input" 
                name="new-appointment-date-input" 
                value={dateData}
                min={getTodayString()}
                onChange={(e) => setDateData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-date-input">Date</label><br />

            <input 
                type="time" 
                id="new-appointment-time-input" 
                name="new-appointment-time-input" 
                value={timeData}
                onChange={(e) => setTimeData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-time-input">Time</label><br />

            <button onClick={() => createAppointment()}>Create Appointent</button>

        </div>

    );
}