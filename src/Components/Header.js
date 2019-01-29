import React from 'react';
import '../Components/CSS/styles.css';
import classes from './CSS/styles.css';




const Header= (props) => {

    // constructor(props){
    // super(props)
    
    // this.state ={
    //     keywords: ''
    //     }
    // }
   


    // inputChangeHandler= (event) => {
      
    //     this.setState({
          
    //         keywords: event.target.value

    //     });
    // }

       
        return (
            
           
            <header >
               
               <div className={classes.logo}> Logo</div>
                   <input type="text" 
                   onChange={props.keywords} />
                  
            </header>
           
        );
    }


export default Header;