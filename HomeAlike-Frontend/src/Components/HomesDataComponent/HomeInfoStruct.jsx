import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import "../../Styles/HomeinfoStyles/HomeInfoStyles.css"
import { useNavigate } from 'react-router';
const HomeInfoStruct = ({ product }) => {

   const HomeInfo = product.state;
   const UserAuthStatus=useSelector((s)=>s.userAuth.value);
   const redirect=useNavigate()

   const HandleBooking=()=>(UserAuthStatus)?redirect("/"):redirect("/loginhome");

   const HandleContact=()=>(UserAuthStatus)?redirect("/"):redirect("/loginhome");
   const ToBase64=(arr)=> btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''));



   return (


      <div className="homeinfo-maincontainer"> 
      <div className="homeinfo-imgcontainer">
         <img className="homeinfo-img1" src={`data:image/jpeg;base64,${ToBase64(HomeInfo.img.data.data)}`} />
         <div className="homeinfo-subimgcontainer">
            <img className="homeinfo-img" src={`data:image/jpeg;base64,${ToBase64(HomeInfo.img.data.data)}`} />
            <img className="homeinfo-img" src={`data:image/jpeg;base64,${ToBase64(HomeInfo.img.data.data)}`} />
            <img className="homeinfo-img" src={`data:image/jpeg;base64,${ToBase64(HomeInfo.img.data.data)}`} />
            <img className="homeinfo-img" src={`data:image/jpeg;base64,${ToBase64(HomeInfo.img.data.data)}`} />
         </div>

      </div>

         <div className="homeinfo-personalInfo">
            <div>
               <p id="host-name">Host : {HomeInfo.name}</p>
               <p className="host-add"> Address : {HomeInfo.state, HomeInfo.city}</p>
               <p className="host-add">PinCode : {HomeInfo.pincode}</p>
               <p className="host-add">LandMark : {HomeInfo.landmark}</p>
            </div>
            <div id="price-container">
               <p className="homeinfo-price">Price : 5000$ per night</p>
               <button className="booking-btn" onClick={HandleBooking}>Book</button>
            </div>
         </div>
         <div className="amenities-form">
            <div className="homeinfo-amenities">
               <p>Amenities</p>
               <span>wifi</span>
               <span> Parking</span>
               <span>Plug-ins</span>
               <span>Security</span>
            </div>
            <div className="homeinfo-formcontainer">
               <form>
                  <div>
                     <label className="homeinfo-formlabel"> Check-in Date </label>
                     <input className="homeinfo-forminput" type="text" />
                  </div>
                  <div>
                     <label className="homeinfo-formlabel"> Check-out Date</label>
                     <input className="homeinfo-forminput" type="text" />

                  </div>
                  <div>
                     <label className="homeinfo-formlabel">Number of Guests</label>
                     <input className="homeinfo-forminput" type="number" />
                  </div>
           <button className="contact-btn" onClick={HandleBooking}>Contact Host</button>

               </form>

            </div>

         </div>


         <div>

            <div className="homeinfo-rulecontainer">
               <p>House Rules</p>
               <span>Notice period 15 Days</span>
               <span>Gate Closing Time </span>
               <span>Gaming Not Allowed</span>

            </div>

            <div>
               <div className="homeinfo-reasoncontainer">
                  <span>Reasons to stay in our house Mannat</span>
                  <p>You get authentic home cooked food</p>
                  <p>You don't feel like a loner in a new place.</p>
                  <p>You will get to know about our culture and tradition.</p>
                  <p>Our house also has seaview.</p>

               </div>
            </div>
         </div >
      </div>

   );

}

export default HomeInfoStruct;