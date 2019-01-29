import React, {Component} from 'react';
import './Resources/Styles.css';
import Header from './Components/Header';
import NewsList from './Components/NewsList';


import JSON from '../src/db.json';

class App extends Component {
  
  state= {
    news: JSON,
    filtered: []
  }
  

  getKeyword = (event) => {
    // console.log(event.target.value)
    let keyword  = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword) > -1
    });
    this.setState({
      filtered
    })
    // console.log(filtered)
  }
  render() {
   let newsFiltered =this.state.filtered;
   let newsWhole=this.state.news;
    return (
      <div>
        <Header keywords= {this.getKeyword}/>
        <NewsList news= {newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          This is a child of props used to MODULARIZE CODE!  
        </NewsList>
        
        
      </div>
    );
  }
}

export default App;
