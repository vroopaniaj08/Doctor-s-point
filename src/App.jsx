
import './App.css'
import Home from './components/home'
import Login from './components/login'
import Menu from './components/menu'
import Doctor from './components/Doctor'
import Register from './components/register'
import {Routes,Route} from "react-router-dom"
import Reception from './components/reception'
import Receptionlist from './components/Receptionlist'
import NewPatient from './components/newPatient'
import PatientListForDoctor from './components/patientListDoctor'
import PatientListForReception from './components/patientListReception'
// import PatientDetailUpdate from './components/patientDetailUpdate'
// import Logout from './components/logout'
// import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'
function App() {
  // localStorage.setItem('reception','[]')
  // let navigate = useNavigate();
  // useEffect( () => {
  //   navigate('/');
  // })
  return (
    <>
    <Menu></Menu>
   <Routes>
    <Route exact path='/' element={<Home></Home>}></Route>
    <Route exact path='/login' element={<Login></Login>}></Route>
    <Route exact path='/register' element={<Register></Register>}></Route>
    <Route exact path='/doctors' element={<Doctor></Doctor>}></Route>
    <Route exact path='/reception' element={<Reception></Reception>}></Route>
    <Route exact path='/receptionlist' element={<Receptionlist></Receptionlist>}></Route>
    <Route exact path='/newpatient' element={<NewPatient></NewPatient>}></Route>
    <Route exact path='/patientListfordoctor' element={<PatientListForDoctor></PatientListForDoctor>}></Route>
    <Route exact path='/patientListforreception' element={<PatientListForReception></PatientListForReception>}></Route>
   </Routes>
    </>
  )
}

export default App
