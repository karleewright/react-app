import React, { Component } from 'react';
import '../Components/CSS/styles.css';




class Header extends Component {

    constructor(props){
    super(props)
    
    this.state ={
        keywords: ''
        }
    }
   


    inputChangeHandler= (event) => {
      
        this.setState({
          
            keywords: event.target.value

        });
    }

    render() {
    

    

        return (
            <header >
               
               <div className= "logo"> Logo </div>
                   <input type ="text" onChange={this.inputChangeHandler} />
           
            </header>
          
        );
    }
}

export default Header;