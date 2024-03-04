import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './Styles/globalStyles.css'
import NavBar from './Components/unitComponent/NavBar';
import Footer from './Components/unitComponent/Footer';
import LoginHome from './Components/authComponent/LoginHome';
import SignUpHome from './Components/authComponent/SignUpHome';
import HomeInfo from './Components/HomesDataComponent/HomeInfo';
import Homes from './Components/HomesDataComponent/DefaultHomes';
import AuthOtp from "./Components/authComponent/AuthOtp";
import HomePage from './Components/HomePageComponent/HomePage';
import "./Styles/globalStyles.css";

const App=()=> {

  return (

<>
<BrowserRouter>
 <NavBar/> 
<Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/homes" element={<Homes/>} />
 <Route path="/homeinfo/:id" element={<HomeInfo/>} />
 <Route path='loginhome' element={<LoginHome/>} />
 <Route path='signuphome' element={<SignUpHome/>} />
 <Route path='/:userStatus/signup/otp' element={<AuthOtp/>} />
 {/* <Route path='ProductInfo/:ProductType/:ProductId' element={<ProductInfo/>}/>
 <Route path='user/:userId' element={<UserProfile/>}/> */}
</Routes>
 <Footer/>
 </BrowserRouter>
</>

 

  )
   
};




export default App;