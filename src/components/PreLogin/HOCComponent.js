
import React from 'react';
import bgimg from '../../assets/images/login_bg.jpg'
import logo from '../../assets/images/logo.jpg'
// import './HOCComponent.css'


function HOCComponent(Comp){
    function UpdateComponent(props){

        return(
            <>
            
           <div className="right_img">
               <img style={{marginLeft:"50%",maxWidth:"100%"}}src={bgimg} alt="bgimg" />
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