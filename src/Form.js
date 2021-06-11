import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : "",
            password : "",
            displayname : ""
        }

    }
    inputset = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        });
    }
register = (e)=>{
    e.preventDefault();
    var dat = {
        username : this.state.username,
        password : this.state.password,
        displayname : this.state.displayname
    };
    axios.post("http://localhost/api/api.php",dat).then(response=>{
        if(response.data= "success"){
            alert("success");
        }
        else{
            alert("error");
        }
        
    }

    );
}
    render(){
        return(
            <div className="container">
                <h2>Registratiom</h2>
                <form>
                    <div className="form-group">
                   <label>Username</label>
                   <input type="text" onChange = {this.inputset} name="username" className="form-control"/>
                   </div>
                   <div className="form-group">
                   <label>Password</label>
                   <input type="password" onChange ={this.inputset} name="password" className="form-control"/>
                   </div>
                   <div className="form-group">
                   <label>Display Name</label>
                   <input type="text" onChange ={this.inputset} name="displayname" className="form-control"/>
                   </div>
                   <div className="form-group">
                   <button onClick = {this.register} className="btn btn-primary">Save</button>
                   </div>
                </form>
        <p>{this.state.username}</p>
        <p>{this.state.password}</p>
        <p>{this.state.displayname}</p>
            </div>
        )
    }
}
export default Form;