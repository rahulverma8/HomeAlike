import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { getStorage } from '../../HelperFun/browserStorageFuns';
import { GetFromApi } from '../../HelperFun/ApiReqHandler';
import HomeInfoStruct from './HomeInfoStruct';

const HomeInfo = () => {
   

   const param = useParams();
   const { state } = useLocation();
   const [loading, setLoading] = useState(true);

   const [homeInfo, setHomeInfo] = useState({});

   useEffect(() => {
      // GetFromApi(`https://home-alike.herokuapp.com/homeinfo/${state._id}`).then((res) => {
      //    setHomeInfo(res)
      //    setLoading(false)}
      // )
   }, []);

   return (

            <HomeInfoStruct product={{ state,homeInfo ,loading }} />

   );
}

export default HomeInfo;