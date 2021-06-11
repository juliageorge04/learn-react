import React, {Component} from 'react';

class Demonew extends Component{
    constructor(props){
        super(props);
        this.state={
            counter : 0,
            enable :false,
            textcontent : "",
            //array
            items : ["apple","mango","orange","pineapple","grapes"],
            //object
            users : [
                   {name:"tinu",age:"5"},
                   {name:"tony",age:"6"},
                   {name:"ann",age:"4"}

            ]

        };
    }
    increment=()=>{
       this.setState((prev,props)=>(
             {counter:prev.counter+1 }
       )

       )

    }
    decrement=()=>{
      this.setState(
          (prev,props)=>({counter : prev.counter-1}
      ) 
      
      
      )
    }
    checkClicked=()=>{
        this.setState((prev,props)=>({enable: !prev.enable}))

    }
    textchangeevent=(e)=>{
        
        this.setState({textcontent : e.target.value})
    }
    render(){
        var lis = this.state.items.map((itm,k)=><li>{itm}</li>)
       return(<div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
       <p>you have clicked {this.state.counter} times</p>
       <label> enable</label>
           <input type="checkbox" onClick= {this.checkClicked}/>
       
       <p>
           it is {this.state.enable?"Enabled":"Disabled"}
       </p>
      <input onChange={this.textchangeevent} type="text" /><br />
       <h3>{this.state.textcontent}</h3>
       <ul>
           {lis}
       </ul>
       <ul>
       { this.state.items.map((itm,k)=><li key={k}>{itm}</li>)}
       </ul>
       <table>
           <tr>Nmae</tr>
           <tr>Age</tr>
       {this.state.users.map((itm,k)=>{
           return(<tr>
               <td>{itm.name}</td>
           <td>{itm.age}</td>
           </tr>)

           })}
       </table>
     </div>);
        
    }

}
export default Demonew;