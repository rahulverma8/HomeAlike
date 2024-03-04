import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/FormStyles.css';
import { changeUserAuth, setUserData } from '../../ReduxCode/Reducers';
import { url } from '../../StaticInfo';
import { PostToApi } from '../../HelperFun/ApiReqHandler';

const LogIn = ({ userStatus }) => {

    const redirect = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loggedInMes, setLoggedInMes] = useState('');

    const dispatch = useDispatch();

    let [user, setUser] = useState({ email: '', password: '' });
    const changeHandler = e => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };

    const loginResHandler = (res) => {
        setLoading(false)
        if (res.isUserLoggedIn && res.isCorrectPassword) {
            setUser({ email: '', password: '' })
            axios.get(`${url}/user/${res.data.id}`, {
                withCredentials: true
            }).then((userdata) => {
                if (userdata.data) {
                    dispatch(changeUserAuth(true))
                    dispatch(setUserData(userdata.data))
                    redirect(`/${userStatus}/${userdata.data.userAccData._Id}`);
                }
            })
        }
        else if (!res.isCorrectPassword && !res.isCorrectUser)
            setLoggedInMes('Enter correct email and password');
        else if (!res.isUserLoggedIn && !res.isCorrectPassword)
            setLoggedInMes('Please enter correct password')
        else
            setLoggedInMes('Something went wrong try again');

    }

    const clickHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        PostToApi(`${url}/${userStatus}/login`, user).then((res) =>  loginResHandler(res) )
            .catch((err) => setLoggedInMes('Something went wrong try again'))
    }



    return (
        <>
            <div className='auth-wrapper'>
                <form className="form">
                    <label htmlFor="email" >Email : </label>
                    <input type="email" name="email" id='email' value={user.email} onChange={changeHandler} />
                    <label htmlFor="password" > Password : </label>
                    <input type='password' name="password" id='password' value={user.password} onChange={changeHandler} />
                    <Link id='fpass' to='/forgotpassword'>Forgot your password</Link>
                    <button className="authbtn" type='submit' onClick={clickHandler}>
                        {loading ? <div className="btn-spinner"></div> : "LogIn"}

                    </button>
                    <p id="warn-message"> {loggedInMes}</p>
                    <p>Didn't have any account ?<Link className='auth-link' to='/signuphome'> Sign Up</Link></p>
                    <p>Right Now and enjoy your shoping </p>
                </form>
            </div>
        </>


    );
}

export default LogIn;