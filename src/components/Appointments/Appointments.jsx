import { useState, useContext } from "react";
import AppointmentForm from "./AppointmentForm/AppointmentForm";


export default function Appointments() {

    // state variables


    const callAppointmentForm = () => {
        setCreatingAppointment(true);
    }

    return (
        <>
            <h2>Appointments</h2>
            <div className="appointments-container">
                <AppointmentForm />
            </div>
            <button onClick={callAppointmentForm}>Add Appointment</button>
        </>    
    );
}