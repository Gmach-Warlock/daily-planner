import { useState, createContext } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import './App.css';
import Root from './Root';
import Contacts from './components/Contacts/Contacts';
import Planner from './components/Appointments/Planner';

export const contactsContext = createContext();
export const creatingContactContext = createContext();

function App() {
  const [contacts, setContacts] = useState([]);

  const [creatingContact, setCreatingContact] = useState(false)
 
  // createContact

  const createContact = () => {
    
  }

  // create browserBrowserRouter

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route path='contacts' element={ <Contacts
        contacts={contacts}
      /> }>
        
      </Route>
      <Route path='planner' element={ <Planner/> } />
    </Route>
  ));

  return (
    <>
      <creatingContactContext.Provider value={[creatingContact, setCreatingContact]}>
        <contactsContext.Provider value={[contacts, setContacts]}>
          <RouterProvider router={ router } />
        </contactsContext.Provider>
      </creatingContactContext.Provider>
      <h1></h1>
    </>
  )
}

export default App
