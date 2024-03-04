import React from 'react';
import "../../Styles/HomePageStyles.css";
import fallbackImg from "../../Styles/fallback.png";


const HomePageSuggestedPlace = () => {

    return (
        <>
            <p className="homepage-titles">Best Recommended Places for you</p>
            <div className="suggestedplace-maincontainer">
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur:Marina</p>

                </div>
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur:Marina</p>

                </div>
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur:Marina</p>

                </div>
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur : Marina</p>

                </div>
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur : Marina</p>

                </div>
                <div className="suggestedplace-container">
                    <img className="suggestedplace-img" src={fallbackImg} />
                    <p className="suggestedplace-title">Jagdalpur : Marina</p>

                </div>

            </div>
        </>
    );
}

export default HomePageSuggestedPlace;