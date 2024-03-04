import axios from 'axios';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom';
import {changeUserAuth} from '../../ReduxCode/Reducers';

const AuthNav=()=>{
    
    const redirect=useNavigate();

    const UserAuthObj=useSelector((state)=>state.userAuth);
    const dispatch=useDispatch();

    const clickLogoutHandler=(e)=>{
        e.preventDefault()
        axios.post('https://ecommerce-app-api-1.herokuapp.com/logout',{  },{withCredentials: true
        }).then((res)=>{
                if(res.data.isUserLoggedOut){
                    alert('user succesfully Logged-out')  
                    useDispatch(changeUserAuth(false))
                    redirect('/') 
                }
                else
                    alert('something went wrong try again');

            }).catch((err)=>{
                    alert('something went wrong try again');
                    console.warn(err)
                })
            

    }
    
    const userUrl= UserAuthObj.value ? `/user/${UserAuthObj.userData.userAccData._Id}` : '/' ;

    return ( 
        <>
        {
            (UserAuthObj.value)
            ?
            <>
            <div className='login-logout'>
            < Link to={userUrl}>{Contextarr[0].userData.userAccData.name}</Link>
            </div>
            <div className='login-logout' onClick={clickLogoutHandler}>
            <p id='nav-logout'>LogOut</p>
            </div>
            <div className='nav-user-icon'>
            < Link to={userUrl}><i className="fa fa-user-circle"></i> </Link>
            </div>
            </>   
            :
            <div className='login'>
            < Link to='/login'>LogIn</Link>
            </div>
        }
        </>

     );


}

export default AuthNav;