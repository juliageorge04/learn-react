import React, {Component} from 'react';
import axios from 'axios';


class World extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        }

    }
componentDidMount(){
    axios.get("https://corona.lmao.ninja/v2/countries").then(response =>{
        this.setState({data: response.data});
    });
}
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                   <table className="table table-bordered table-striped">
                       <thead>
                           <td>Country
                              
                           </td>
                           <td>Total Cases</td>
                           <td>Recovered</td>
                           <td>Death</td>
                       </thead>
                       <tbody>
                           {
                              this.state.data.map((itm,ky)=>{
                                  return(
                                      <tr>
                                          <td>{itm.country}  <img style={{width:'64px', marginLeft : '10px'}} src={itm.countryInfo.flag}/></td>
                                          <td>{itm.cases}</td>
                                          <td>{itm.recovered}</td>
                                          <td>{itm.todayRecovered}</td>
                                      </tr>
                                  )
                              }) 
                           }
                       </tbody>
                   </table>
                </div>
            </div>
        )
    }

}
export default World;