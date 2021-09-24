import React from 'react'
import {withRouter} from "react-router-dom";
function Logout(props) {

    function popupOk(){
        localStorage.removeItem("Authentication");
        localStorage.removeItem('Username')
        localStorage.setItem("Authentication",false)
        props.history.push("/Login")
    }
    return (
        <div className="logoutpopup">
            <div className="logoutbox">
                <span className="logoutclose-icon" onClick={props.handleClose}>x</span>
                <b>Are you sure you want to exit?</b> <br></br>
                        <br></br><button id='button' onClick={popupOk} >Ok</button> &nbsp;
                        <button id='button' onClick={props.handleClose}>Cancel</button>
            </div>

        </div>
    )
}

export default withRouter(Logout)
