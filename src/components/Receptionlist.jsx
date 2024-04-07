import { useEffect } from "react";
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
export default function Receptionlist() {
    let doctor = useSelector(state => state.userDetail.value);
    useEffect(() => {
        rece()
    })
    let rece = async () => {
        const response = await webMethods.getapi(apis.RECEPTIONLISTAPI, doctor.token);
        console.log(response)
    }
    const storedData = localStorage.getItem('reception');

    if (storedData) {
        var receptionlist = JSON.parse(storedData);
    }
        return <>
            {receptionlist.length?
            <table className="table container-fluid" style={{marginTop:"150px"}}>
                <tr><th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE NUMBER</th></tr>
                    {receptionlist.map((obj)=><tr>
                        <td>{obj.id}</td>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.phone}</td>
                    </tr>)}
                    </table>
                    :
                    <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                        <div className="text-center"><h1>Kindly add the reception</h1></div>
                        <div>
                        <Link className = "text-center" to="/reception"><button className="btn btn-primary">Add Reception</button></Link>
                        </div>
                    </div>
                }
                </>
    }