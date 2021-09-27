import React, { useEffect } from 'react'
import './AddTask.css'
import { Button } from '@material-ui/core'
import { TextField,TextareaAutosize } from '@material-ui/core'
import { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {connect} from 'react-redux'
import {TaskAdding} from '../../../redux/action'
function AddTask(props) {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    // const [error,setError]=useState();
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
            
            var selected=props.select
            console.log("Selected",selected)
            var userLogged=localStorage.getItem("UserName")
            // console.log("userLogged",userLogged)
            const data={title:title,description:description,category:props.select,UserName:userLogged}

            console.log("userLogged",userLogged)

            props.TaskAdding(data)
            props.handleClose()
        }
       
    }
    function cancelData(){
        console.log("cancel data")
    }
        
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon"  onClick={props.handleClose}>X </span>
                <div>
               <form >
                <TextField className="contentlabel" id="title"  variant="standard" placeholder="Title" name="title" value={title} onChange={setAddHandle} required/>
               <br/>
               <br/>
               {/* <TextField className="contentlabel"  label="description" variant="standard" placeholder="Title" value={description}/>
               <br/> */}
                <TextareaAutosize className="contentlabel"
                    aria-label="empty textarea"
                    name="describe"
                    placeholder="Description"
                   value={description} onChange={setAddHandle}
                   required
                />
                <br/>
                <br/>
               <Button style={{backgroundColor:"grey",size:"medium"}} onClick={addData} >Add </Button>
               <Button style={{backgroundColor:"grey",size:"medium"}} onClick={cancelData}>Cancel</Button>
               </form>
               </div>
            
            </div>
        </div>
    )
}

const mapDispatchToProps =(dispatch) =>{
    return{
        TaskAdding:(s) =>{dispatch(TaskAdding(s))}
    };
};

export default connect(null,mapDispatchToProps)(AddTask);