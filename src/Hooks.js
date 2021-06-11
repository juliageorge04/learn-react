import React, {Component} from 'react';
class Hooks extends Component{
    constructor(props){
          super(props);
          console.log("rtet");
          this.state= {
              counter : 0
          }
    }

    componentWillMount(){
        console.log("inside componentWillMount");
    }
    increment=() =>{
        this.setState((prev,prop)=>({counter :prev.counter +1 }))
    }
    render(){
        console.log("inside render method");
        return(
            <div>Hooks
              <button onClick={this.increment}>Increment</button>  
        <p>you have clicked{this.state.counter} times </p>
            </div>
        )
    }
  componentDidMount(){
    console.log("inside componentDidMount");
  }
  componentWillUpdate(){
    console.log("inside componentWillUpdate");
  }
  componentDidUpdate(){
    console.log("inside componentDidUpdate");  
  }
}
export default Hooks;