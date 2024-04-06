// import { Link } from 'react-router-dom';
import { createRef } from "react"
import webMethods from "../service/webMethods";
import url from '../service/apis'
import { useState } from "react";

function Register() {
  let nameBox = createRef();
  let phoneBox = createRef();
  let emailBox = createRef();
  let passwordBox = createRef();
  
  const [msg,setmsg] = useState("")

  let isRegister = async(event)=>{
    event.preventDefault()
    let ob={                   
      "name": nameBox.current.value,
      "phoneNumber": phoneBox.current.value,
      "email": emailBox.current.value,
      "password": passwordBox.current.value
      }
      const response = await webMethods.postapi(url.REGISTERAPI,ob)
      console.log(response);
      {setmsg(response.data.msg)}
      event.target.reset();
  }

  return (
    <>
      <div className="container p-4 w-50" style={{ marginTop: "250px", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "5px" }}>
        <form onSubmit={isRegister}>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={nameBox} className="form-control" placeholder="Enter name here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={phoneBox} className="form-control" placeholder="Enter Phone Number here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={emailBox} className="form-control" placeholder="Enter Email here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={passwordBox} className="form-control" placeholder="Enter Password here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button type = "submit" className="btn btn-primary w-50">Sign Up or Register</button> &nbsp;&nbsp;&nbsp;
              {msg}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
