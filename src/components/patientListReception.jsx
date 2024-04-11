import { useEffect, useState } from "react"
// import { createRef } from "react"
import { useRef } from "react";
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from "react-redux";
// import PatientDetailUpdate from "./patientDetailUpdate";
// import { Link } from "react-router-dom";
export default function PatientList() {
    let logintoken = useSelector(state => state.userDetail.value);
    const [getpatient, setpatient] = useState([])
    useEffect(() => {
        patientList()
    })
    let nameBox = useRef();
    let appointmentBox = useRef();
    let phoneBox = useRef();
    let idBox = useRef();
    let storeData = useSelector(state => state.userDetail.value)
    let isUpdate = async (data) => {
        console.log(data)
        nameBox.current.value = data.name
        appointmentBox.current.value = data.appointmentdate
        phoneBox.current.value = data.phoneNumber
        idBox.current.value = data.id
        console.log("hi")

    }
    let doneupdate = async (event) => {
        event.preventDefault()
        let ob = {
            "name": nameBox.current.value,
            "appointmentdate": appointmentBox.current.value,
            "phoneNumber": phoneBox.current.value
        }
        let response = await webMethods.putapiwitht(apis.PATIENTDETAILUPDATE + "/" + idBox.current.value, ob, storeData.token)
        console.log(response)
    }

    let patientList = async () => {
        let response = await webMethods.getapi(apis.PATIENTLISTFORRECEPTIONAPI, logintoken.token);
        // console.log(response);
        setpatient(response.data.data);
    }
    let patientListDelete = async (id) => {
        console.log(apis.DELETEPATIENT + "/" + id)
        let response = await webMethods.deleteapi(apis.DELETEPATIENT + "/" + id, logintoken.token)
        console.log(response)
    }
    return <>
        <h3 className='text-center' style={{ marginTop: "150px" }}>Patient List</h3>
        <table className="table table-striped table-bordered table-hover table-responsive-md container">
            <thead>
                <tr><th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>AGE</th>
                    <th>PHONE NUMBER</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {getpatient.map((obj) => <tr>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.gender}</td>
                    <td>{obj.age}</td>
                    <td>{obj.phoneNumber}</td>
                    <td><button type="button" className="btn btn-primary" onClick={() => isUpdate(obj)} data-bs-toggle="modal" data-bs-target="#exampleModal">Update
                    </button></td>
                    <td><button className="btn btn-primary" onClick={() => patientListDelete(obj.id)}>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h3 className='text-center'>change here</h3>
                        <form onSubmit={doneupdate}>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="text" ref={nameBox} className="form-control" placeholder="Enter name here"></input>
                                    <input type="text" ref={idBox} className="form-control d-none" placeholder="Enter id here"></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="text" ref={appointmentBox} className="form-control" placeholder="Enter Email here"></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <input type="text" ref={phoneBox} className="form-control" placeholder="Enter Password here"></input>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-primary w-50">Update Detail</button> &nbsp;&nbsp;&nbsp;
                                    {/* {msg} */}
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </>
}