import React from 'react';
import "../../Styles/HomePageStyles.css";
import fallbackImg from "../../Styles/fallback.png";
const HomePageFeedBack=()=> {

    return ( 
    <React.Fragment>
    <p className="homepage-titles">Some of our Guest Experience</p>
    
    <div className="feedback-maincontainer">
    <div className="feedback-container">
    <img className="feedback-img" src={ fallbackImg} />
    <p className="feedback-title">Jagdalpur : Marina</p>
    <p className="feedback-para"> Marina is a 
        nice hotel with excellent food and service. They offer complementary fruit, chocolates and coffee in the room</p>
    </div>
    <div className="feedback-container">
    <img className="feedback-img" src={ fallbackImg} />
    <p className="feedback-title">Jagdalpur : Marina</p>
    <p className="feedback-para"> Marina is a 
        nice hotel with excellent food and service. They offer complementary fruit, chocolates and coffee in the room</p>
    </div>
    <div className="feedback-container">
    <img className="feedback-img" src={ fallbackImg} /> 
    <p className="feedback-title">Jagdalpur : Marina</p>
    <p className="feedback-para"> Marina is a 
        nice hotel with excellent food and service. They offer complementary fruit, chocolates and coffee in the room</p>
    </div>
     <div className="feedback-container">
    <img className="feedback-img" src={ fallbackImg} /> 
    <p className="feedback-title">Jagdalpur : Marina</p>
    <p className="feedback-para"> Marina is a 
        nice hotel with excellent food and service. They offer complementary fruit, chocolates and coffee in the room</p>
    </div>
    </div>
    </React.Fragment> 
);
}

export default HomePageFeedBack;