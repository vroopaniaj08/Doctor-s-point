import { useEffect, useState } from "react";
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Receptionlist() {
    let doctor = useSelector(state => state.userDetail.value);
    // let obj1 = localStorage.getItem('reception');
    // let obj3 = JSON.parse(obj1)
    // const [obj10, setobj] = useState(obj3)
    const [getreception, setreception] = useState([])

    useEffect(() => {
        rece()
    },[])

    let rece = async () => {
        const response = await webMethods.getapi(apis.RECEPTIONLISTAPI, doctor.token);
        console.log(response.data.data)
        console.log(doctor.token)
        setreception(response.data.data)
    }
    // let deleteObj = (id)=>{
    //     let obj1 = localStorage.getItem('reception');
    //     let obj3 = JSON.parse(obj1)
    //     let obj2 = obj3.filter((obj)=>obj.id != id);
    //     localStorage.setItem('reception',JSON.stringify(obj2));
    //     {setobj(obj2)}
    // }
    // const storedData = localStorage.getItem('reception');

    // if (storedData) {
    //     var receptionlist = JSON.parse(storedData);
    // }
        return <>
            <h3 className="text-center" style={{marginTop:"150px"}}>Reception List</h3>
            {getreception.length?
            <table className="table table-striped table-bordered table-hover table-responsive-md container">
                <thead>
                    <tr><th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE NUMBER</th></tr>
                </thead>
                <tbody>
                    {getreception.map((obj)=><tr>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.phoneNumber}</td>
                        {/* <td><button className = "btn btn-primary" onClick={()=>deleteObj(obj.id)}>Delete</button></td> */}
                    </tr>)}
                </tbody>
                    </table>
                    : 
                     <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                        <div className="text-center"><h1>Kindly add the reception</h1></div>
                        <div>&nbsp;&nbsp;&nbsp;
                        <Link className = "text-center" to="/reception"><button className="btn btn-primary">Add Reception</button></Link>
                        </div>
                    </div>
                } 
                </>
    }