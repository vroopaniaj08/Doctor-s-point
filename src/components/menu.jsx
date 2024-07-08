import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loginInfo } from "./loginslice"
// import { useSelector } from 'react-redux'

function Menu() {
  // let doctorlogin = useSelector(state=>state.userDetail.value)
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let doctorLoginStatus = useSelector(state=>state.userDetail.value)

  // let result = JSON.parse(localStorage.getItem('LoginStatus'))
  
  let logout=(event)=>{
    event.preventDefault();
    dispatch(loginInfo({id:undefined,isL:false,name:undefined,userType:undefined,token:undefined}))
        navigate('/');
}
  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">apoorvjain7222@gmail.com</a>
            <i className="bi bi-phone"></i> +91 94072XXXXX
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="https://www.instagram.com/apoorvjain_8/" className="instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="https://www.linkedin.com/in/apoorv-jain-290a9a269" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>


      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto">Doctor's point</h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            {doctorLoginStatus.isL?
            doctorLoginStatus.userType == 'doctor'?

              <ul>
              <li><Link className="nav-link scrollto" to="/reception">Reception</Link></li>
              <li><Link className="nav-link scrollto" to="/receptionlist">Reception list</Link></li>
              <li><Link className="nav-link scrollto" to="/doctors">Doctors</Link></li>
              <li><Link className="nav-link scrollto" to="/patientListfordoctor">Patient List</Link></li>
              <li><Link className="nav-link scrollto" onClick={logout}>Logout</Link></li>
              <li><Link className="nav-link" to="/patientappointmentdone"><button className="btn btn-outline-primary">Appointment</button></Link></li>
              </ul>
              :
              <ul>
              {/* <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li> */}
              <li><Link className="nav-link scrollto" to="/patientListforreception">Patient List</Link></li>
              <li><Link className="nav-link scrollto" to="/newpatient">Add patient</Link></li>
              <li><Link className="nav-link scrollto" onClick={logout}>Logout</Link></li>
              <li><Link className="nav-link" to="/patientappointmentdone"><button className="btn btn-outline-primary">Appointment</button></Link></li>
              </ul>
            
            :
            <ul>
              <li><Link className="nav-link scrollto" to="/">Home</Link></li>
              <li><Link className="nav-link scrollto" to="/login">Login</Link></li>
            </ul>
            }
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          {/* <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a> */}

        </div>
      </header>
    </>
  )
}

export default Menu
