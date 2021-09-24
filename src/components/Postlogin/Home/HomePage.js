import React, { useState } from 'react'
import { Button } from '@material-ui/core'
// import { toggleButtonClasses } from '@mui/material';
import Logout from '../Logout/Logout';
import Dashboard from '../Dashboard/Dashboard';
import Product from '../Product/Product';
import './home.css'

function HomePage() {

const [open,setOpen]=useState(false);
const [selectedMenu,setSelectedMenu]=useState('Dashboard');

function togglePopup() {
        setOpen(!open)

    }

    function onClickMenu(menu) {
        setSelectedMenu(menu)

    }
    return (
        <div className="home">

         <div className="header">
             <span className="left">
                 <Button id="selectedButton" className={selectedMenu==='Dashboard'?"selected":""}onClick={()=>onClickMenu('Dashbord')}>Dashboard</Button> &nbsp;
                 <Button id="selectedButton" className={selectedMenu==='Product'?"selected":""} onClick={()=>onClickMenu('Product')}>Product</Button>          
             </span>

             <span className="right">
                <button value="Click to open Popup" id="logoutbutton" onClick={togglePopup}>Logout</button></span>
                {open && <Logout
                    handleClose={togglePopup} />}

         </div>

         {selectedMenu ==='Product' ? (<Product/>) : (<Dashboard />)} 

        </div>
    )
}

export default HomePage
