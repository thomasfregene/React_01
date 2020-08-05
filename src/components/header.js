import React,{Component} from 'react';



// let styles ={
//     header:{
//         backgroundColor:'#03a9f4'
//     },
//     logo:{
//         color:'#fff',
//         fontFamily: 'Roboto',
//         textAlign: 'center'
//     }
// }

class Header extends Component{

     hello =()=>{
         console.log('I was clicked');
     }

     inputChange(event){
         console.log(event.target.value);
     }
    render(){
        return(
            <header>
                <div 
                className='logo'
                onClick ={this.hello}
                >Logo</div>
                <input
                onChange={this.inputChange}
                /> 
            </header>
        )
    }
}

export default Header;