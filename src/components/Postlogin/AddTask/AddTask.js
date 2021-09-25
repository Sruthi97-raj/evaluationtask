import React, { useEffect } from 'react'
import './AddTask.css'
import { Button } from '@material-ui/core'
import { TextField,TextareaAutosize } from '@material-ui/core'
import { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function AddTask(props) {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [error,setError]=useState();
    // var error="Please Fill the field before clicking"
    function setAddHandle(e){
       if(e.target.name==='title'){
         setTitle(e.target.value)
       }
       if(e.target.name==='describe'){
           setDescription(e.target.value)
       }

       
    }

    function addData(){

        if( title ==='' || description===''){
            // setError("plese fill");
        //  <span>{error}</span>  
         alert("Please fill Data")
        }
        else{
            console.log(title);
            console.log(description);
        }
       
    }
        
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon"  onClick={props.handleClose}>X </span>
               
                <TextField className="contentlabel" id="title"  variant="standard" placeholder="Title" name="title" value={title} onChange={setAddHandle} />
               <br/>
               <br/>
               {/* <TextField className="contentlabel"  label="description" variant="standard" placeholder="Title" value={description}/>
               <br/> */}
                <TextareaAutosize className="contentlabel"
                    aria-label="empty textarea"
                    name="describe"
                    placeholder="Description"
                   value={description} onChange={setAddHandle}
                />
                <br/>
                <br/>
               <Button style={{backgroundColor:"grey",size:"medium"}} onClick={addData} >Add </Button>
             
            </div>
        </div>
    )
}

export default AddTask
