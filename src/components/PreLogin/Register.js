import React from 'react'

// import './register.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import HOCComponent from './HOCComponent';
import { emailValidation } from '../PreLogin/Validations';
import { passwordValidation } from '../PreLogin/Validations';
import { REGISTER_PAGE } from '../../common/Constants'



function Register(props) {
    const [username, setUserName] = useState("");
    const [userNameErrorMessage, setUserNameErrorMessage] = useState("")
    const [userNameFlag, setUserNameFlag] = useState(true);

    const [password, setPassword] = useState("");
    const [passwordFlag, setPasswordFlag] = useState(true);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")

    const [email, setEmail] = useState("");
    // const [flag,setFlag]=useState(false);
    const [emailFlag, setEmailFlag] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    var submitvalue = 0;


    function submitHandleRegister(event) {



        if (event.target.name === "username") {
            setUserName(event.target.value);
            setUserNameFlag(false)

        }

        if (event.target.name === "email") {
            setEmail(event.target.value);
            setEmailFlag(false)

            var email = event.target.value
            var emailValid = emailValidation(email);
            console.log("Email", emailValid)
            if (emailValid === true) {
                setEmailError(false)
            }
            else {
                setEmailError(true)
            }

        }
        if (event.target.name === "password") {
            setPassword(event.target.value);
            setPasswordFlag(false);

            var password = event.target.value;
            var passwordValid = passwordValidation(password)
            console.log("Password", passwordValid);

            if (passwordValid === true) {
                setPasswordError(false);

            }
            else {
                setPasswordError(true);
            }

        }
    }



    function registerSubmit(event) {


        event.preventDefault();


        if ((userNameFlag === true) && (emailFlag === true) && (passwordFlag === true)) {
            setUserNameErrorMessage(REGISTER_PAGE.USERNAME_EMPTY_MESSAGE)
            setEmailErrorMessage(REGISTER_PAGE.EMAIL_EMPTY_MESSAGE)
            setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        if ((userNameFlag === true) && (emailFlag === true)) {
            setUserNameErrorMessage(REGISTER_PAGE.USERNAME_EMPTY_MESSAGE)
            setEmailErrorMessage(REGISTER_PAGE.EMAIL_EMPTY_MESSAGE)
        }
        if ((userNameFlag === true) && (passwordFlag === true)) {
            setUserNameErrorMessage(REGISTER_PAGE.USERNAME_EMPTY_MESSAGE)
            setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        if ((emailFlag === true) && (passwordFlag === true)) {
            setEmailErrorMessage(REGISTER_PAGE.EMAIL_EMPTY_MESSAGE)
            setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_EMPTY_MESSAGE)
        }
        if ((userNameFlag === true) || (emailFlag === true) || (passwordFlag === true)) {
            alert("Form Registration Please fill all fields...")
        }

        else {
            if (emailError === false && passwordError === false) {
                let details = { Username: username, Email: email, Password: password }
                var user = JSON.parse(localStorage.getItem('User Details'))

                if (user == null) {
                    user = [];
                    user.push(details);

                    window.localStorage.setItem('User Details', JSON.stringify(user))
                    submitvalue = 1;
                    alert(REGISTER_PAGE.SUCCESSFULL_REGISTRATION)
                    props.history.push("/Login")
                }

                else {
                    var checkEmail = user.find(item => item.Email === email);

                    var checkUserName = user.find((item => item.Username === username));
                    var checkUserEmail = user.find((item => item.Email === username));

                    console.log("name", checkUserEmail);


                    if (checkEmail === undefined && checkUserName === undefined && checkUserEmail === undefined) {
                        user.push(details);

                        window.localStorage.setItem('User Details', JSON.stringify(user))
                        submitvalue = 1;
                        alert(REGISTER_PAGE.SUCCESSFULL_REGISTRATION)
                        props.history.push('/Login')
                    }

                    else {
                        submitvalue = 0;
                        alert(REGISTER_PAGE.VALIDATION_MESSAGE)
                    }
                }

            }
            else {
                if (emailError === true || passwordError === false) {
                    setEmailErrorMessage(REGISTER_PAGE.EMAIL_VALIDATION_MESSAGE)
                }
                else if (emailError === false && passwordError === true) {
                    setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_VALIDATION_MESSAGE)
                }
                else {
                    setPasswordErrorMessage(REGISTER_PAGE.PASSWORD_VALIDATION_MESSAGE)
                }
            }
            submitvalue = 0;


        }
        if (submitvalue === 1) {
            setUserName("");
            setEmail("");
            setPassword("");
        }

    }
    return (
        <div className="register">
            <div className="registerleft-box">
                <h3 className="welcome">WELCOME TO</h3>
                <img className="logocls" src={props.image} alt="logo"></img>
                <p className="paragraph">Login in to get in the moment updates on the things </p>
                 <p className="paragraph">that interest you</p>

                <form className="form" name="register">

                    <input type="text" name="username" placeholder="Username" value={username} onChange={submitHandleRegister} required /><br />
                    <span className="error">{userNameErrorMessage}</span>
                    <br />


                    <input type="text" name="email" placeholder="Email" value={email} onChange={submitHandleRegister} required /><br />
                    <span className="error">{emailErrorMessage}</span>
                    <br />


                    <input type="password" name="password" placeholder="Password" value={password} onChange={submitHandleRegister} required /><br />
                    <span className="error">{passwordErrorMessage}</span>
                    <br />


                    <button type="submit" onClick={registerSubmit} >Sign Up</button><br />
                </form>
                <br />

                Already Register? <Link to="/Login" > <span>Sign In Now</span></Link><br />

            </div>
        </div>
    )
}

export default HOCComponent(Register);