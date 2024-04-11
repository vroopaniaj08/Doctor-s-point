import { useEffect, useState } from "react"
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
export default function PatientList(){
    let logintoken = useSelector(state=>state.userDetail.value);
    const [getpatient,setpatient] = useState([])
    useEffect(()=>{
        patientList()
    })

    let patientList = async() =>{
        let response = await webMethods.getapi(apis.PATIENTLISTFORDOCTORAPI,logintoken.token);
        console.log(response);
        setpatient(response.data.data);
    }
    return <>
            <table className="table table-striped table-bordered table-hover table-responsive-md container" style={{marginTop:"150px"}}>
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>AGE</th>
                    <th>PHONE NUMBER</th></tr>
                </thead>
                <tbody>
                    {getpatient.map((obj)=><tr>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.age}</td>
                        <td>{obj.phoneNumber}</td>
                        {/* <td><button className = "btn btn-primary" onClick={()=>deleteObj(obj.id)}>Delete</button></td> */}
                    </tr>)}
                </tbody>
                    </table>
    </>
}