import { Link } from "react-router-dom"
import Login from "./login"

function Home() {
  return (
    <>
    <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <h1>Welcome to Doctor's</h1>
      <h2>We are team of talented Doctors</h2>
      <Link to = '/login' className="btn-get-started scrollto">Get Started</Link>
    </div>
  </section>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3" style={{marginTop:'200px'}}>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      {/* <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Pricing</a></li> */}
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
  </footer>
    </>
  )
}

export default Home
