import { PowerInputSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import './Dashboard.css'
import AddTask from '../AddTask/AddTask';
function Dashboard() {

    const [isOpen, setIsOpen] = useState(false);

    function addToggle() {

        setIsOpen(!isOpen);


    }
    return (
        <div className="column">

            <div className="row">
                <div className="heading"><b>To Do</b></div>

                <p>Contents to print Progress</p>
                {isOpen && <AddTask
                    //   content={<>
                    //     {/* <input type="text" placeholder="title"/>
                    //     <br/>
                    //     <input type="text" placeholder="Description"/>
                    //     <br/>
                    //     <button>Test button</button> */}
                    //   </>}
                    handleClose={addToggle}
                />}

                <button className="btnaction" onClick={addToggle} value="Add a Card..."> Add a Card...</button>
            </div>

            <div className="row">
                <div className="heading"><b>Progress</b></div>
                <p>Contents to print To Do</p>

                {isOpen && <AddTask

                    handleClose={addToggle}
                />}
                <button className="btnaction" onClick={addToggle}>Add a Card...</button>
            </div>

            <div className="row">
                <div className="heading"><b>Completed</b></div>
                <p>Contents to print Completed</p>
                
                {isOpen && <AddTask
                    handleClose={addToggle}
                />}
                <button className="btnaction" onClick={addToggle}>Add a Card...</button>
            </div>

            <div className="row">
                <div className="heading"><b>Tested</b></div>
                <p>Contents to print Tested</p>
                {isOpen && <AddTask
                    handleClose={addToggle}
                />}
                <button className="btnaction" onClick={addToggle} >Add a Card...</button>
            </div>
        </div>
    )
}

export default Dashboard
