import React, {Component} from 'react';
import axios from 'axios';
class Ajax extends Component{

    constructor(props){
         super(props);
         this.state={
             posts : []
         }
    
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response=>{
           // console.log(response.data[0]);
            this.setState({posts : response.data})
        })
    
    }
    render(){
        return(

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                {this.state.posts.map((itm,k)=>{
                      return(
                          <tr>
                              <td>{itm.id}</td>
                      <td>{itm.title}</td>
                          </tr>
                      )
                })}
                </tbody>
            </table>

        )
    }

}
export default Ajax;