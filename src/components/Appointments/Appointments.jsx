import { useState, useContext } from "react";
import { creatingAppoinmentContext } from "../../App";
import AppointmentForm from "./AppointmentForm/AppointmentForm";


export default function Appointments() {

    // state variables

    const [creatingAppoinment, setCreatingAppointment] = useContext(creatingAppoinmentContext);

    const callAppointmentForm = () => {
        setCreatingAppointment(true);
    }

    return (
        <>
            <h2>Appointments</h2>
            <div className="appointments-container">
                <AppointmentForm />
            </div>
            {creatingAppoinment === false && <button onClick={callAppointmentForm}>Add Appointment</button>}
        </>    
    );
}