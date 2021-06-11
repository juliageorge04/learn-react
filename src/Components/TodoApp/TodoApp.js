import React, {Component} from 'react';
import "./TodoApp.css";

class  TodoApp extends Component{
    state={
        input : "",
        items : [],
        inputs: ['input-0']
    }
   
    handleChange = event =>{
        this.setState({input : event.target.value});
       
    };
    storeItems = event=>{
      
        event.preventDefault();
        const { input } = this.state;

        //const allitems = this.state.items;
        //allitems.push(input);
        //this.setState({items : allitems});

        this.setState({
            items : [...this.state.items, input],
            input : ""
        });
    };
    deleteItem= key => {
      // const allitems = this.state.items;
      // allitems.splice(key,1);
       this.setState({
          // items : allitems
          items: this.state.items.filter( (data, index) => index !== key )
        });
    }
    editItems = (key) =>{
        console.log(key);
       
    }
    render(){
        const {input,items} = this.state;
       
   
        return(
            <div className="todo-container">
                <h1>Todo App</h1>
                
                <form className="input-section" onSubmit={this.storeItems}>
                    <input type="text" placeholder="Enter items..." onChange={this.handleChange} value={input}/>
                  
                </form>
                <div>
                    <ul>
                      
                        {items.map((data,index)=>(
                            <li key={index} ><span contentEditable ="false">{data}</span><i className="fas fa-pencil-alt" onClick={ ()=>this.editItems(index)}></i><i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
                        ))}
                    </ul>
                   
                </div>
            </div>
        )
    }
}
export default TodoApp;