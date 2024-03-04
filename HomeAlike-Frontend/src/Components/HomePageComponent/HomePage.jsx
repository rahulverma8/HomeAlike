import React from 'react';
import "../../Styles/HomePageStyles.css";
import HomePageFeedBack from './HomePageFeedback';
import HomePageSuggestedPlace from './HomePageSuggestedPlaces';
import HomePageValues from './HomePageValues';

const HomePage=()=> {
    return ( 
    <>   
    <HomePageSuggestedPlace/> 
    <HomePageValues/>
    <HomePageFeedBack/>
    </> 
);
}

export default HomePage;