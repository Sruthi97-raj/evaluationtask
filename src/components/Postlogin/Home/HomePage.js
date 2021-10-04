import React, { useEffect, useState } from 'react'

import Logout from '../Logout/Logout';
import Dashboard from '../Dashboard/Dashboard';
import Product from '../Product/Product';


function HomePage() {

    const [open, setOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');
    const [log, setLog] = useState('')

    useEffect(() => {
        const UserDetails = localStorage.getItem('UserName');
        setLog(UserDetails)
    }, [])


    function togglePopup() {
        setOpen(!open)
        

    }

    function onClickMenu(menu) {
        setSelectedMenu(menu)

       
    }
    


    return (
        <div className="home">
            <center>
                <div className="userWelcome"> <h1>Welcome {log}</h1> </div>
            </center>
            <div className="header">
                <span className="left">

                    <button id="selectButton" className={selectedMenu === 'Dashboard' ? "selected" : ""} onClick={() => onClickMenu('Dashboard')}>Dashboard</button> &nbsp;
                    <button id="selectButton" className={selectedMenu === 'Product' ? "selected" : ""} onClick={() => onClickMenu('Product')}>Product</button>
                </span>

                {/* <span className="right"> */}
                <div >
                    <button className="logout_btn" value="Click to open Popup" id="logoutbutton" onClick={togglePopup}>Logout</button>
                    {/* </span> */}
                    {open && <Logout
                        handleClose={togglePopup} />}
                </div>

               
            </div>
            {selectedMenu === 'Product' ? (<Product />) : (<Dashboard />)}

       

        </div>
    )
}

export default HomePage
