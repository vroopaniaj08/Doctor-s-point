import { createRef } from "react";
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from 'react-redux';
export default function Reception(){
    let doctor = useSelector(state=>state.userDetail.value)
    let nameBox = createRef();
    let phoneBox = createRef();
    let emailBox = createRef();
    let passwordBox = createRef();
    let raddressBox = createRef();
    let doctorBox = createRef();

    let saveReception = async(event) =>{
        event.preventDefault();
        let ob = {
            name:nameBox.current.value,
            phoneNumber:phoneBox.current.value,
            email:emailBox.current.value,
            password:passwordBox.current.value,
            raddress:raddressBox.current.value
        }
        const response = await webMethods.postapiwitht(apis.REGISTERAPI,ob,doctor.token)
        console.log(response)
    }

    return<>
        <div className="container p-4 w-50" style={{ marginTop: "250px", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "5px" }}>
        <form onSubmit={saveReception}>
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
              <input type="text" ref={raddressBox} className="form-control" placeholder="Enter raddress here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button type = "submit" className="btn btn-primary w-50">Save Reception</button> &nbsp;&nbsp;&nbsp;
              {/* {msg} */}
            </div>
          </div>
        </form>
      </div>
    </>
}