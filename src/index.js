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
      footerText: 'I am the main footer',
      filtered: []
    } 
  }

  getKeywords=(event)=>{
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keywords) > -1
    })
    this.setState({
      filtered
    })
  }

  render(){
    console.log(this.state)
    const state = this.state;
    let newsFiltered = state.filtered;
    let newsAll = state.news;
    return(
      <>
        <Header keywords={this.getKeywords}/>
        <NewsList news={newsFiltered.length === 0 ? newsAll : newsFiltered}>
          <br/>
          <h3>This is the news</h3>
        </NewsList>
        <Footer
        footerText={state.footerText} 
        />
      </>
    )
  }
}
 
ReactDOM.render(<App />, document.getElementById("root"));
