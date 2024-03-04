import React from 'react';
import "../../Styles/HomePageStyles.css";


const HomePageValues=()=> {

    return ( 
    <>
    <p className="homepage-titles">Our Values and we'll try our best to fullfill </p>
  <div className="value-maincontainer">
    <div className="value-container">
        <div className="value-subcontainer">
        <p className="value-title">C</p>
        <p className="value-subtitle">Convenience</p>
        </div>
        <div  className="value-subcontainer2">
            <p>:: Fast Verification </p>
            <p>:: Customize tour Package </p>
            <p>:: Easy Cancellation </p>
        </div>

    </div>
    <div className="value-container">
        <div className="value-subcontainer">
            <p className="value-title"> T</p>
        <p className="value-subtitle">  Trust</p> 
        </div>
       
    <div  className="value-subcontainer2">
            <p>:: On Ground Verified Places </p>
            <p>:: Verified Guest </p>
            <p>:: Data Privacy </p>
        </div>
    </div>
    <div className="value-container">
        <div className="value-subcontainer">
            <p className="value-title">C</p>
        <p className="value-subtitle">Culture & Traditions</p>
        </div>
        
    <div  className="value-subcontainer2">
            <p>:: Explore Various Cultures </p>
            <p>:: Language Exchange</p>
            <p>:: Enjoy Cultural Activities</p>
        </div>
        
    </div>
    </div>
    </> 
);
}

export default HomePageValues;