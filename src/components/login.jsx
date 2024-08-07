import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import webMethods from '../service/webMethods';
import apis from '../service/apis';
import { useDispatch } from 'react-redux'
import { loginInfo } from './loginslice';
import { useNavigate } from 'react-router-dom'
import photo from '../../public/assets/img/doctors/doctor-removebg.png'
import  GoogleLogin  from './googleLogin';
function Login() {
  let emailBox = createRef();
  let passwordBox = createRef();
  const [msg,setmsg] = useState("");
  const [type,settype] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let isLogin= async(event)=>{
    event.preventDefault();
    let ob = {
      "email":emailBox.current.value,
      "password":passwordBox.current.value
    }
    const response = await webMethods.postapi(apis.LOGINAPI,ob)
    console.log(response);
    {setmsg(response.data.msg)}
    // {settype("("+response.data.data.userType+")")}

    if(response.data.status){
      dispatch(loginInfo({id:response.data.data.user.id,isL:true,name:response.data.data.user.name,userType:response.data.data.userType,token:response.data.data.token}))
      if(response.data.data.userType == 'doctor'){
        navigate('/doctors')
      }
      if(response.data.data.userType == 'reception'){
        navigate('/patientListforreception')
      }
    }

    event.target.reset();
  }
  
  return (
    <>
            {/* <div className='container col-md-5 w-50'>
              <img src={photo} alt = "doctor"></img>
            </div> */}
      <div className="container p-4 w-50" style={{ marginTop: "250px", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "5px" }}>
        <h3 className='text-center'>Login page</h3>
        <form onSubmit={isLogin}>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={emailBox} className="form-control" placeholder="Enter email here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <input type="text" ref={passwordBox} className="form-control" placeholder="Enter Password here"></input>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <button className="btn btn-primary w-50">Login</button> &nbsp;&nbsp;&nbsp;
              {/* <GoogleLogin></GoogleLogin> */}
              {msg}&nbsp;{type}
              <Link to='/register' className="text-center w-100 d-block">Sign Up or Register</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login