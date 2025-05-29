import { useState, createContext, useEffect } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import './App.css';
import Root from './Root';
import Contacts from './components/Contacts/Contacts';
import Appointments from './components/Appointments/Appointments';

// context functions

export const contactsContext = createContext();
export const appointmentsContext = createContext();

function App() {

  // state variables

  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);






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

        <contactsContext.Provider value={[contacts, setContacts]}>

          <appointmentsContext.Provider value={[appointments, setAppointments]}>


              <RouterProvider router={ router } />


          </appointmentsContext.Provider>

        </contactsContext.Provider>

    </>
  )
}

export default App
