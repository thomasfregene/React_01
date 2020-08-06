import React,{Component} from "react";
import ReactDOM from "react-dom";

import Header from './components/header';
import NewsList from './components/news_list';
import './styles/styles.css';

import JSON from './db.json';

class App extends Component {
  constructor(){
    super()

    this.state ={
      news: JSON,
    } 
  }


  render(){
    console.log(this.state.news)
    return(
      <>
        <Header/>
        <NewsList news={this.state.news}/>
      </>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById("root"));
