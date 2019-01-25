import React, {Component} from 'react';
import './Resources/Styles.css';
import Header from './Components/Header';
import NewsList from './Components/NewsList';


import JSON from '../src/db.json';

class App extends Component {
  
  state= {
    news: JSON
  }
  
  render() {
   
    return (
      <div>
        <Header/>
        <NewsList news= {this.state.news}>
          This is a child of props used to MODULARIZE CODE!  
        </NewsList>
        
        
      </div>
    );
  }
}

export default App;
