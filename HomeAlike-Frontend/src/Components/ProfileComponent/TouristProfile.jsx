import React, { useContext, useState } from 'react';



const TouristProfile=()=> {
    const contextarr=useContext(ContextArr)
    const [profile,setProfile]=useState( contextarr[0].userData.userAccData );


    return ( 
        <>
        <h1>Hi {profile.name} !!!</h1>
        </>
     );
    ;
}

export default TouristProfile;