// import { Link } from 'react-router-dom';
import { createRef } from "react"
import webMethods from "../service/webMethods";
import url from '../service/apis'
import { useState } from "react";
import { useSelector } from 'react-redux';

function NewPatient() {
  let nameBox = createRef();
  let sexBox = createRef();
  let ageBox = createRef();
  let phoneBox = createRef();
  let appointmentBox = createRef();
  let timeBox = createRef();
  
  let result = useSelector(state=>state.userDetail.value)
  const [msg,setmsg] = useState("")

  let Patient = async(event)=>{
    event.preventDefault()
    let ob={                   
      "name": nameBox.current.value,
      "sex": sexBox.current.value,
      "age": ageBox.current.value,
      "phoneNumber": phoneBox.current.value,
      "appointmentdate": appointmentBox.current.value,
      "time": timeBox.current.value
      }
      const response = await webMethods.postapiwitht(url.NEWPATIENTAPI,ob,result.token);
      console.log(response);
      {setmsg(response.data.msg)}
      event.target.reset();
  }

  return (
    <>
      <div className="container p-4 w-50" style={{ marginTop: "250px", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "5px" }}>
      <h3 className='text-center'>New Patient</h3>
        <form onSubmit={Patient}>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={nameBox} className="form-control" placeholder="Enter name here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={phoneBox} className="form-control" placeholder="Enter phone number here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-6">
              <input type="text" ref={sexBox} className="form-control" placeholder="Enter sex here"></input>
            </div>
            <div className="col-md-5 col-5 offset-1">
              <input type="text" ref={ageBox} className="form-control" placeholder="Enter age here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={appointmentBox} className="form-control" placeholder="Enter appointment date here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={timeBox} className="form-control" placeholder="Enter time here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button type = "submit" className="btn btn-primary w-50">Add Patient</button> &nbsp;&nbsp;&nbsp;
              {msg}
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewPatient
