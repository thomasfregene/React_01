import React,{Component} from 'react';


class Header extends Component{

    state ={
        title: 'The keywords are:',
        keywords: '',
        count: 0
    }

     hello =()=>{
         console.log('I was clicked');
     }

     inputChange(event){
         this.setState({
             keywords: event.target.value
         })
     }

     addOne(){
         this.setState((state, props)=>({
             count: state.count + 1
         }))
     }


    render(){
        console.log(this.state)
        return(
            <header>
                <div 
                className='logo'
                onClick ={this.hello}
                >Logo</div>
                <input
                onChange={(event)=>this.inputChange(event)}
                /> 

        <div>{this.state.title}</div>
        <div>{this.state.keywords}</div>

        <br/>
        <div>{this.state.count}</div>
        <button onClick={()=>this.addOne()}>AddOne</button>
            </header>

        )
    }
}

export default Header;