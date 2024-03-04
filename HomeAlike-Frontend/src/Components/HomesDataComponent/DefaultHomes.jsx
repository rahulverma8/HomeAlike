import React, { useEffect, useState } from 'react';
import HomeStruct from './HomeStruct';
import { GetFromApi } from '../../HelperFun/ApiReqHandler';
import Spinner from '../unitComponent/Spinner';
import { getStorage, setStorage } from '../../HelperFun/browserStorageFuns';
import { url } from '../../StaticInfo';
import "../../Styles/HomeinfoStyles/HomeStruct.css";


const Homes = () => {

    const [defaultHomes, setDefaultHomes] = useState(getStorage("DefaultHomes") || []);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (getStorage("DefaultHomes")){
            setDefaultHomes(getStorage("DefaultHomes"));
            setLoading(false);
        } 
        else
            GetFromApi(`${url}/homedata`).then((res) => {
                setDefaultHomes(res)
                if(res.length>0){
                    setStorage("DefaultHomes", res);
                    setLoading(false);
                }
                
            })
        
    }, []);
    return (
        <>
              <p id="homes-title">Homes</p>
            {
                loading ? <Spinner /> :
                    <div className="home-warpper">

                        {
                            defaultHomes.map((p) => {
                                return (
                                    <HomeStruct key={p._id} props={p} />

                                )
                            })
                        }
                    </div>
            }
        </>
    );
}

export default Homes;