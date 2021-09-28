
import React from 'react';
import bgimg from '../../assets/login_bg.jpg'
import logo from '../../assets/logo.jpg'

function HOCComponent(Comp){
    function UpdateComponent(props){

        return(
            <>
            
           <div style={{float:"right",width:"50%",height:"100%"}}>
               <img src={bgimg} alt="bgimg"/>
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