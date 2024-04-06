import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import webMethods from '../service/webMethods';
import apis from '../service/apis';


function Login() {
  let emailBox = createRef();
  let passwordBox = createRef();
  const [msg,setmsg] = useState("");
  
  let isLogin= async(event)=>{
    event.preventDefault();
    let ob = {
      "email":emailBox.current.value,
      "password":passwordBox.current.value
    }
    const response = await webMethods.postapi(apis.LOGINAPI,ob)
    console.log(response);
    {setmsg(response.data.msg)}
    event.target.reset();
  }
  
  return (
    <>
      <div className="container p-4 w-50" style={{ marginTop: "250px", boxShadow: '1px 2px 4px 2px rgba(0, 0, 0, 0.3)', borderRadius: "5px" }}>
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
              {msg}
              <Link to='/register' className="text-center w-50 d-block">Sign Up or Register</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
