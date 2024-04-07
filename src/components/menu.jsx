import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

function Menu() {
  let doctorlogin = useSelector(state=>state.userDetail.value)

  return (
    <>
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">apoorvjain7222@gmail.com</a>
            <i className="bi bi-phone"></i> +91 94072XXXXX
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>


      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <h1 className="logo me-auto"><a href="index.html">Doctor's point</a></h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            {doctorlogin.isL?<ul>
              <li><Link className="nav-link scrollto" to="/reception">Reception</Link></li>
              <li><Link className="nav-link scrollto" to="/receptionlist">Reception list</Link></li>
              <li><Link className="nav-link scrollto" to="/doctors">Doctors</Link></li>
              <li><Link className="nav-link scrollto" to="/contact">Contact</Link></li>
              <li><Link className="nav-link scrollto" to="/logout">Logout</Link></li>
              </ul>
            :
            <ul>
              <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
              <li><Link className="nav-link scrollto" to="/about">About</Link></li>
              <li><Link className="nav-link scrollto" to="/services">Services</Link></li>
              <li><Link className="nav-link scrollto" to="/departments">Departments</Link></li>
              <li><Link className="nav-link scrollto" to="/login">Login</Link></li>
            </ul>
            }
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

        </div>
      </header>
    </>
  )
}

export default Menu
