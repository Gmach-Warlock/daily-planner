import { useState, useContext } from "react";
import AppointmentForm from "./AppointmentForm/AppointmentForm";
import TileList from "../Contacts/TileList/TileList";
import { appointmentsContext } from "../../App";


export default function Appointments() {

    // state variables

    const [appointments, setAppointments] = useContext(appointmentsContext)


    return (
        <>
            <h2>Appointments</h2>
            <div className="appointments-container">
                <AppointmentForm />
                <TileList 
                    arrayToIterate={appointments}
                />
            </div>
        </>    
    );
}