import { PowerInputSharp } from '@material-ui/icons';
import React, { useState } from 'react'
import './Dashboard.css'
import AddTask from '../AddTask/AddTask';
import { useEffect } from 'react';
import {connect} from 'react-redux';
import {TaskAdding} from '../../../redux/action'
function Dashboard(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [todo,setToDo]=useState([]);
    const [progress,setProgress]=useState([]);
    const [completed,setCompleted]=useState([]);
    const [tested,setTested]=useState([]);
    const [logged,setLogged]=useState('');
    const [from, setFrom] = useState('')
    const [task,setTask]=useState('')

  useEffect(() =>{

    var person= localStorage.getItem("UserName")
    console.log("user",person)
    setLogged(person)

    const taskdetails=JSON.parse(localStorage.getItem('UserTask_Details'));
    setTask(taskdetails)

    if(taskdetails){
        setToDo(taskdetails.filter(item =>item.category ==='todo' && item.UserName ===person))
        setProgress(taskdetails.filter(item =>item.category === 'progress' && item.UserName === person))
        setCompleted(taskdetails.filter(item =>item.category==='tested' && item.UserName ===person))
        setTested(taskdetails.filter(item =>item.category ==='task' && item.UserName===person))
    }
    
  },[])

  useEffect(() =>{
      if(props.task && props.task !== {}){
          var person=props.task.Username
          setLogged(person)
          console.log("Logged Person",logged)

          var taskdetails = JSON.parse(localStorage.getItem("UserTask_Details"))

          if(taskdetails === null){
              taskdetails=[];
              taskdetails.push(props.task)
              console.log("Details",taskdetails)
              setTask(taskdetails)
              window.localStorage.setItem('UserTask_Details',JSON.stringify(taskdetails))
          }
          else{
                 taskdetails.push(props.task)
                 console.log("Details:",taskdetails)
                 setTask(taskdetails)

                 window.localStorage.setItem('UserTask_Details',JSON.stringify(taskdetails))
                 console.log("Task",taskdetails[0])
          }
          console.log("task",task)
        let valueFilter=taskdetails.filter(item =>item.category ==='todo')
        console.log("FilteredValue",valueFilter)

        setToDo(taskdetails.filter(item =>item.category==='todo' && item.UserName ===person))
        setProgress(taskdetails.filter(item =>item.category==='progress' && item.Username ===person))
        setCompleted(taskdetails.filter(item =>item.category==='completed' && item.Username ===person))
        setTested(taskdetails.filter(item =>item.category==='tested' && item.Username ===person))

        props.TaskAdding(null)
      }
  },[props.task])

    function addToggle(taskSelected) {
          
       setFrom(taskSelected) 
        setIsOpen(!isOpen);


    }
    function drangHandler(e, item) {
        console.log("dragstart", item)
        e.dataTransfer.setData("item", JSON.stringify(item))
    }
    
    function onDragOver(e) {
        e.preventDefault();
    }

    function onDrop(e,taskSelected) {
        let item = JSON.parse(e.dataTransfer.getData("item"))
        console.log('draggable', item)
        const data= task;
        let index = task.findIndex(tasks => (tasks.title === item.title && tasks.description === item.description && tasks.category === item.category))
        item.category = taskSelected
        data[index] = item
        console.log("", data)
        setTask(data)
        window.localStorage.setItem('UserTask_Details', JSON.stringify(task))
        setToDo(data.filter(item => item.category === 'todo' && item.userName === logged))
        setProgress(data.filter(item => item.category === 'progress' && item.userName === logged))
        setCompleted(data.filter(item => item.category === 'completed' && item.userName ===logged))
        setTested(data.filter(item => item.category === 'tested' && item.userName ===logged))


    }
    return (
        <div className="column">
           
 
           <div className='row' onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, 'todo')}>
                    <div class="captionTask">To Do</div>
                    <div className="AddTask">
                        {todo.map((item) => (
                            <div className='item'
                                draggable
                                onDragStart={(e) => drangHandler(e, item)}>
                                <span className="heading">
                                    {item.title}
                                </span>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => addToggle("todo")}>Add a card...</button>
                    {isOpen&& <AddTask
                        select={from}
                        handleClose={addToggle}
                    />}

                </div>
                 


               
           <div className='row' onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, 'progress')}>
                    <div class="captionTask">Progress</div>
                    <div className="AddTask">
                        {progress.map((item) => (
                            <div className='item'
                                draggable
                                onDragStart={(e) => drangHandler(e, item)}>
                                <span className="heading">
                                    {item.title}
                                </span>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => addToggle("progress")}>Add a card...</button>
                    {isOpen&& <AddTask
                        select={from}
                        handleClose={addToggle}
                    />}

                </div>


                <div className='row' onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, 'completed')}>
                    <div class="captionTask">Completed</div>
                    <div className="AddTask">
                        {completed.map((item) => (
                            <div className='item'
                                draggable
                                onDragStart={(e) => drangHandler(e, item)}>
                                <span className="heading">
                                    {item.title}
                                </span>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => addToggle("completed")}>Add a card...</button>
                    {isOpen&& <AddTask
                        select={from}
                        handleClose={addToggle}
                    />}

                </div>

           

                <div className='row' onDragOver={(e) => onDragOver(e)}
                    onDrop={(e) => onDrop(e, 'tested')}>
                    <div class="captionTask">Tested</div>
                    <div className="AddTask">
                        {tested.map((item) => (
                            <div className='item'
                                draggable
                                onDragStart={(e) => drangHandler(e, item)}>
                                <span className="heading">
                                    {item.title}
                                </span>
                                <div className='description'>{item.description}</div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => addToggle("tested")}>Add a card...</button>
                    {isOpen&& <AddTask
                        select={from}
                        handleClose={addToggle}
                    />}

                </div>

        </div>
    );
};

const mapStateToProps = ({actionDetails}) => { 
    console.log("todo task",actionDetails.taskuser)
    return{
        task:actionDetails.taskuser
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        
        TaskAdding: (s) =>{ dispatch(TaskAdding(s))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
