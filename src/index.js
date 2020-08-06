import React,{Component} from "react";
import ReactDOM from "react-dom";

import Header from './components/header';
import NewsList from './components/news_list';
import Footer from './components/footer';

import './styles/styles.css';

import JSON from './db.json';

class App extends Component {
  constructor(){
    super()

    this.state ={
      news: JSON,
      footerText: 'I am the main footer'
    } 
  }


  render(){
    const state = this.state;
    return(
      <>
        <Header/>
        <NewsList 
        news={state.news}
        />
        <Footer
        footerText={state.footerText} 
        />
      </>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById("root"));
