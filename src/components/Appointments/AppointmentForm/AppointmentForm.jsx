import { useState, useContext } from 'react';
import { appointmentsContext, creatingAppoinmentContext } from '../../../App';
import './AppointmentForm.css';
import { contactsContext } from '../../../App';

export default function AppointmentForm() {

    // state variables

    const [appointments, setAppointments] = useContext(appointmentsContext);
    const [creatingAppoinment, setCreatingAppointment] = useContext(creatingAppoinmentContext);
    const [contacts, setContacts] = useContext(contactsContext);
    const [nameData, setNameData] = useState('');
    const [contactData, setContactData] = useState('');
    const [dateData, setDateData] = useState('');
    const [timeData, setTimeData] = useState('');



    const createAppointment = () => {

        setAppointments((prev) => [...prev, {
            name: nameData, 
            contact: contactData, 
            date: dateData, 
            time: timeData
        }]);
        setCreatingAppointment(false);
    }

    return (
        <div className="appointment-form"> 

            <input 
                type="text" 
                id="new-appointment-name-input" 
                name="new-appointment-name-input" 
                onChange={(e) => setNameData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-name-input">Name</label><br />

            <input 
                type="text" 
                id="new-appointment-contact-input" 
                name="new-appointment-contact-input" 
                onChange={(e) => setContactData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-contact-input">Contact</label><br />

            <input 
                type="text" 
                id="new-appointment-date-input" 
                name="new-appointment-date-input" 
                onChange={(e) => setDateData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-date-input">Date</label><br />

            <input 
                type="text" 
                id="new-appointment-time-input" 
                name="new-appointment-time-input" 
                onChange={(e) => setTimeData(e.target.value)}
            /><br />
            <label htmlFor="new-appointment-time-input">Time</label><br />

            <button onClick={() => createAppointment()}>Create Appointent</button>

        </div>

    );
}