import React, { useState } from 'react'
import '../../Styles/FormStyles.css';
import SignUp from './SignUp';


export default function SignUpHome() {
  const [userStatus, setUserStatus] = useState(" guest");
  const [btnColor,setBtnColor] =useState({b1:"#0a9111" ,b2:"#ff6701" ,b3:"#ff6701"});
 
  const GuestToggler = () => {  setBtnColor({b1:"#0a9111"}); setUserStatus(" guest");}
  const HostToggler = () =>{ setBtnColor({b2:"#0a9111"}); setUserStatus("host");  }


  return (
    <div>
      <div className="home-wrapper">
        <div className="home-inner-wrapper">
          <button className="home-btns" style={{backgroundColor:btnColor.b1}} onClick={GuestToggler}>
             Guest
          </button>
          <button className="home-btns" style={{backgroundColor:btnColor.b2}}  onClick={HostToggler}>
            Host
          </button>
        </div>
      </div>
      <div className="home-wrapper2">
        <div className="home-wrapper3">
       <p id="auth-title">Signup As a {userStatus.charAt(0).toUpperCase()+userStatus.slice(1)}</p> 
      </div>
      </div>
      <SignUp userStatus={userStatus} />

    </div>
  )
}