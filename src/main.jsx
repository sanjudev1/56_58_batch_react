import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList  from "./components/usersList.jsx"
import BirthdayList from './components/Birthwishes.jsx'
import Customnavbar from './components/customNavbar.jsx';
import CustomCoursel from './components/customCoursel.jsx';
import { CustomSpinner } from './components/customSpinner.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Customnavbar/>
  <CustomCoursel/>
  <CustomSpinner/>
  <UsersList/>
  <BirthdayList/>
  </StrictMode>,
)
