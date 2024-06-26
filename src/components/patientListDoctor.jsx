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

    let patientListDelete = async (id) => {
        console.log(apis.DELETEPATIENT + "/" + id)
        let response = await webMethods.deleteapi(apis.DELETEPATIENT + "/" + id, logintoken.token)
        console.log(response)
    }
    return <>
            <h3 className='text-center' style={{marginTop:"150px"}}>Patient List</h3>
            <input type="text" className="form-control container my-2" onChange={(e)=>setSearch(e.target.value)} placeholder="Search Patient"></input>
            <table className="table table-striped table-bordered table-hover table-responsive-md container">
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>AGE</th>
                    <th>PHONE NUMBER</th>
                    <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {getpatient.filter((obj)=> search.toLowerCase() === '' ? obj:obj.name.toLowerCase().includes(search)).map((obj)=><tr>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.gender}</td>
                        <td>{obj.age}</td>
                        <td>{obj.phoneNumber}</td>
                        <td><button className="btn btn-primary" onClick={() => patientListDelete(obj.id)}>Delete</button></td>
                        {/* <td><button className = "btn btn-primary" onClick={()=>deleteObj(obj.id)}>Delete</button></td> */}
                    </tr>)}
                </tbody>
                    </table>
    </>
}