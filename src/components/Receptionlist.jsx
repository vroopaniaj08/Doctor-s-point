import { useEffect } from "react";
import webMethods from "../service/webMethods";
import apis from "../service/apis";
import {useSelector} from 'react-redux';
export default function Receptionlist (){
    let doctor = useSelector(state=>state.userDetail.value);
    useEffect(()=>{
        rece()
    })
    let rece = async()=>{
        const response = await webMethods.getapi(apis.RECEPTIONLISTAPI,doctor.token);
        console.log(response)
    }
    return <>
        
    </>
}