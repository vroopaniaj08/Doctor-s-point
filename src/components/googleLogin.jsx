import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const GoogleSignIn = () => {
  
  
    return (
      <GoogleLogin
        clientId="921755601449-rq286kvo8ns6thh1n461tjcmbqo5d4mf.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={(CR)=>{
            const CRD=jwtDecode(CR.credential)
            console.log(CRD)
        }}
        onError={()=>{
            console.log("Login Failed")
        }}
      />
    );
  };


  export default GoogleSignIn