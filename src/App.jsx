import { useState, createContext, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import './App.css';
import Root from './Root';
import Contacts from './components/Contacts/Contacts';
import Appointments from './components/Appointments/Appointments';

// context functions

export const contactsContext = createContext();
export const creatingContactContext = createContext();
export const appointmentsContext = createContext();
export const creatingAppoinmentContext = createContext();

function App() {

  // state variables

  const [contacts, setContacts] = useState([]);
 


  const [appointments, setAppointments] = useState([{
    name: 'Get High',
    contact: 'Chong', 
    date: 'April 20', 
    time: '4:20'
  }])
/*
  const [appointments, setAppointments] = useState(() => {
    const localValue = localStorage.getItem("appointments");
    if (localValue == null) return [] 
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments))
  }, [appointments])


*/
  const [creatingContact, setCreatingContact] = useState(false);
  const [creatingAppoinment, setCreatingAppointment] = useState(false);


  // create browserBrowserRouter

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route path='contacts' element={ <Contacts
        contacts={contacts}
      /> }>
        
      </Route>
      <Route path='planner' element={ <Appointments /> } />
    </Route>
  ));

  return (
    <>
      <creatingContactContext.Provider value={[creatingContact, setCreatingContact]}>

        <contactsContext.Provider value={[contacts, setContacts]}>

          <appointmentsContext.Provider value={[appointments, setAppointments]}>

            <creatingAppoinmentContext.Provider value={[creatingAppoinment, setCreatingAppointment]}>

              <RouterProvider router={ router } />

            </creatingAppoinmentContext.Provider>

          </appointmentsContext.Provider>

        </contactsContext.Provider>

      </creatingContactContext.Provider>

    </>
  )
}

export default App
