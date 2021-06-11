import React, {Component} from 'react';

class List extends Component{

    constructor(props){
        super(props);
        this.state={
            items: ["red", "green","blue","black"],
            users:[
                {name:"ann",age:"1"},
                {name:"ben",age:"2"},
                {name:"jim",age:"3"}
            ]
        }

    }

    render(){
        var lis = this.state.items.map((itm,k)=><li key={k}>{itm}</li>)

        return(
            <div>
                <ul>
                    {lis}
                </ul>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                    {
                         this.state.users.map((itm,k)=>{return(<tr><td>{itm.name}</td>
                            <td>{itm.age}</td> </tr>)})
                        }
               
                   
                </table>
            </div>
        );
    }

}
export default List;