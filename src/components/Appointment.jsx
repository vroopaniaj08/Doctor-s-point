import { useEffect, useState } from "react"
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
export default function PatientList(){
    let logintoken = useSelector(state=>state.userDetail.value);
    const [getpatient,setpatient] = useState([])
    const [search , setSearch] = useState('')
    useEffect(()=>{
        patientList()
    })

    let patientList = async() =>{
        let response = await webMethods.getapi(apis.PATIENTLISTFORDOCTORAPI,logintoken.token);
        // console.log(response);
        setpatient(response.data.data);
    }

    let patientListDone = async (id,ActiveStatus) => {
        let obj = {
            activeStatus:false
        }
        if(ActiveStatus){
            let response = await webMethods.putapiwitht(apis.PATIENTAPPOINTMENTDONE+"/"+id,obj,logintoken.token)
            console.log(response)
        }
        obj = {
            activeStatus:true
        }
        if(!ActiveStatus){
            let response = await webMethods.putapiwitht(apis.PATIENTAPPOINTMENTUNDO+"/"+id,obj,logintoken.token)
            console.log(response)
        }
    }

    // let patientListUndo = async (id) => {
    //     let response = await webMethods.putapi(apis.PATIENTAPPOINTMENTUNDO+"/"+id,logintoken.token)
    //     console.log(response)
    // }

    return <>
            <h3 className='text-center' style={{marginTop:"150px"}}>Patient List</h3>
            <input type="text" className="form-control container my-2" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Patient"></input>
            <table className="table table-striped table-bordered table-hover table-responsive-md container">
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>PHONE NUMBER</th>
                    <th>Appointment Completed</th>
                    {/* <th>Undo Appointment</th> */}
                    </tr>
                </thead>
                <tbody>
                    {getpatient.filter((obj)=> search.toLowerCase() === '' ? obj:obj.name.toLowerCase().includes(search)).map((obj)=><tr>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.phoneNumber}</td>
                       
                        <td>{obj.activeStatus===true?<button className="btn btn-success" onClick={() => patientListDone(obj.id,obj.activeStatus)}>active</button>:<button className="btn btn-warning" onClick={() => patientListDone(obj.id,obj.activeStatus)}>Deactive</button>}</td>

                        {/* <td><button className="btn btn-primary" onClick={() => patientListUndo(obj.id)}>Undo</button></td> */}
                        {/* <td><button className = "btn btn-primary" onClick={()=>deleteObj(obj.id)}>Delete</button></td> */}
                    </tr>)}
                </tbody>
                    </table>
    </>
}