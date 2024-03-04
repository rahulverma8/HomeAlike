import React from 'react';
import { useNavigate } from 'react-router';

const HomeStruct = ({ props }) => {

    const redirect = useNavigate();
    const ClickToHomeInfo = () => redirect(`/homeinfo/${props._id}`, { state: props });
    const ToBase64=(arr)=> btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ''));
     
    return (
        <>


            <div className="home-container" onClick={ClickToHomeInfo} key={props._id}>
                {/* <img id="home-img" src={'data:image/jpeg;base64,' + props.img.data.toString('base64')}  /> */}
                <img id="home-img" src={`data:image/jpeg;base64,${ToBase64(props.img.data.data)}`}  />
                <p id="homeHost-name">{props.name}</p >
                <p className="home-attributes">{props.state} {props.city}</p>
                <p className="home-attributes">{props.landmark}</p>
                <p className="home-attributes">{props.facility}</p >
            </div >

        </>

    );

}

export default HomeStruct;