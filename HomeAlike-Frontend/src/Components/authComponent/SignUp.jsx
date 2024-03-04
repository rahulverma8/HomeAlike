import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../Styles/FormStyles.css';
import { url } from '../../StaticInfo';
import { PostToApi } from '../../HelperFun/ApiReqHandler';


function SignUp({ userStatus }) {
    const redirect = useNavigate();
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [signedUpMes, setsignedUpMes] = useState('');
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setUser((user) => ({ ...user, [name]: value }));
    };

    const signupResHandler = (res) => {
        setLoading(false)
        if (res.isDuplicateUser)
            setsignedUpMes('User already exist in database');
        else if (res.isEmailSent)
            redirect(`/${userStatus}/signup/otp`, { state: { ...user } })
        else if (!res.isEmailSent)
            setsignedUpMes('please enter correct email id')
        else
            setsignedUpMes('something went wrong try again');
    }


    const clickHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        PostToApi(`${url}/${userStatus}/signup`, user).then((res) => signupResHandler(res))
            .catch((err) => setsignedUpMes('something went wrong try again'))
    }

    return (
        <div className='auth-wrapper'>

            <form className="form">
                <label htmlFor="name" >Name : </label>
                <input type='text' name='name' id='name' value={user.name} onChange={changeHandler} />
                <label htmlFor="email" >Email : </label>
                <input type="email" name="email" id='email' value={user.email} onChange={changeHandler} />
                <label htmlFor="password" > Password : </label>
                <input type='password' name="password" id='password' value={user.password} onChange={changeHandler} />
                <button style={{ marginTop: "10px" }} className="authbtn" type='submit' onClick={clickHandler}>
                    {loading ? <div className="btn-spinner"></div> : "Sign Up"}
                </button>
                <p id="warn-message"> {signedUpMes}</p>
                <p>Already have an account? <Link className='auth-link' to='/loginhome'> LogIn</Link> </p>
            </form>
        </div>

    );
}

export default SignUp;