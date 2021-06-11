import React, {Component} from 'react';

class Events extends Component{

    shoot=(a,b)=>{
        alert(b.type);
      }
    render(){


        return(
            <div>
                <button onClick={this.shoot.bind(this,"uuu")}>click</button>
            </div>
        )
    }


}

export default Events;