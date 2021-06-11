import React, {Component} from 'react';


class Todo extends Component{
    constructor(props){
        super(props);
        this.state ={
            items: ["item1"],
            textcontent :""
        };
    
    }

    txtchange = (e)=>{
        this.setState({textcontent : e.target.value});
        
    }
    removeitem = (i)=>{
        let currentitems=this.state.items;
        currentitems.splice(i,1);
        this.setState({items : currentitems });
    }

    additem = ()=>{
        let currenttext= this.state.textcontent;
        let currentitems=this.state.items;
        currentitems.push(currenttext);
        this.setState({items : currentitems });
    }
    render(){
        return(
            <div className="">
              <input type="text" onChange = {this.txtchange}/>
              <button onClick= {this.additem}>Add</button>
              <ul>
                  
                  {this.state.items.map((itm,k)=>{
                    return(
                    <li>{itm}{k}<button onClick={()=>{this.removeitem(k)}}>Delete</button></li>
                    )
                  })}
              </ul>
                <p>{this.state.textcontent}</p> 
            </div>
        )
    }
      
  
}
export default Todo;