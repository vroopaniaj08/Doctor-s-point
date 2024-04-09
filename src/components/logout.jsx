// import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
import { loginInfo } from './loginslice'
import { useNavigate } from 'react-router-dom'
export default function Logout(){
    // let logininfo = useSelector(state=>state.userDetail.value)
    let dispatch = useDispatch();
    let navigate = useNavigate();
    localStorage.setItem("LoginStatus",JSON.stringify(false))

    // let logout=(event)=>{
        // event.preventDefault();
        // dispatch(loginInfo({id:undefined,isL:false,name:undefined,userType:undefined,token:undefined}))
        // setTimeout(() => {
            navigate('/');
        //   }, 1000);
    // }
    return <>
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <div className="text-success">Logout Success!!</div>
        </div>
    </>
}