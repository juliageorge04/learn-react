import React, {Component} from 'react';

class Counternew extends Component{
    constructor(props){
        super(props);
        this.state={
             counter : 0,
             x : 3,
             y : "test"
        }

        
    }
    /*increament (){
        setTimeout function(){
        this.setState{ (prev,props)=>({ counter:prev.counter+1})
         
        };
    }*/
    render(){
       return(
        <div>
        <p>
      {this.state.counter}
        </p>
    </div>
       )
    }
}
export default Counternew;