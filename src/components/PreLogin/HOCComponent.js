
import React from 'react';
import bgimg from '../../assets/images/login_bg.jpg'
import logo from '../../assets/images/logo.jpg'
// import './HOCComponent.css'


function HOCComponent(Comp){
    function UpdateComponent(props){

        return(
            <>
            
           <div >
               <img style={{float:"right",width:"50%",height:"100vh"}}src={bgimg} alt="bgimg" />
               </div>

               <Comp
               {...props}
               image={logo}/>
          
           </>
        );

    }
    return UpdateComponent
}
export default HOCComponent;