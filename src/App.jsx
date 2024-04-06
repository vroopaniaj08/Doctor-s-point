
import './App.css'
import Home from './components/home'
import Login from './components/login'
import Menu from './components/menu'
import Doctor from './components/Doctor'
import Register from './components/register'
import {Routes,Route} from "react-router-dom"
function App() {


  return (
    <>
    <Menu></Menu>
   <Routes>
    <Route exact path='/' element={<Home></Home>}></Route>
    <Route exact path='/login' element={<Login></Login>}></Route>
    <Route exact path='/register' element={<Register></Register>}></Route>
    <Route exact path='/doctors' element={<Doctor></Doctor>}></Route>
   </Routes>
    </>
  )
}

export default App
