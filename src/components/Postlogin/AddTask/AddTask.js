import React, { useEffect } from 'react'
import './AddTask.css'
import { useState } from 'react'
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import { connect } from 'react-redux'
import { TaskAdding } from '../../../redux/action'
function AddTask(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    // const [error,setError]=useState();
    // var error="Please Fill the field before clicking"
    function setAddHandle(e) {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        }
        if (e.target.name === 'describe') {
            setDescription(e.target.value)
        }


    }

    function addData() {

        if (title === '' || description === '') {
            // setError("plese fill");
            //  <span>{error}</span>  
            alert("Please fill Data")

        }
        else {
            console.log(title);
            console.log(description);

            var selected = props.select
            console.log("Selected", selected)
            var userLogged = localStorage.getItem("UserName")
            // console.log("userLogged",userLogged)
            const data = { title: title, description: description, category: props.select, UserName: userLogged }

            console.log("userLogged", userLogged)

            props.TaskAdding(data)
            props.handleClose()
        }

    }
    function cancelData() {
        console.log("cancel data")
        props.handleClose()
    }

    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>X </span>
                <div>
                    <div className="captionhead"><h4>Add a Item </h4></div>
                    <form className="popupForm" >

                        <input type="text" name="title"  placeholder="Title" onChange={setAddHandle} required />
                        <br />
                         <br/>
                        <textarea type='text' placeholder='Description' name='describe' onChange={setAddHandle} value={description} required /> 
                        <br />
                        <br />
                        
                        <button className="addTaskbutton" onClick={addData} >Add </button>
                        <button  className="addTaskbutton" onClick={cancelData}>Cancel</button>
                       
                    </form>
                </div>

            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        TaskAdding: (s) => { dispatch(TaskAdding(s)) }
    };
};

export default connect(null, mapDispatchToProps)(AddTask);