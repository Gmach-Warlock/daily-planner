import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import './App.css';
import Root from './Root';
import Contacts from './components/Contacts/Contacts';
import Planner from './components/Appointments/Planner';

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
      <Route path='contacts' element={ <Contacts/> } />
      <Route path='planner' element={ <Planner/> } />
    </Route>
  ));

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
