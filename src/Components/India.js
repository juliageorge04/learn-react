import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import axios from 'axios';
class India extends Component{
    constructor(props){
            super(props);
            this.state = {
                data : {}
            }
    }
    componentDidMount(){
     axios.get("https://corona.lmao.ninja/v2/countries/india").then(response => {
         this.setState({data : response.data});
     });
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                     <img src="https://www.countryflags.io/in/shiny/64.png"/>
                     <h3>INDIA</h3>
                </div>
                <div className="col-md-12">
                    <div className="row">
                          <div className="col-md-3">
                          <Card  className="badge badge-primary" style={{ width: '18rem',backgroundColor:'blue' }}>
                            <Card.Body className="text-center">
                                <Card.Title>TOTAL CASES</Card.Title>
                                    <h3>{this.state.data.cases}</h3>
                                <Card.Text>
                                [Today :{this.state.data.todayCases}]
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                          </div>
                          <div className="col-md-3">
                          <Card  style={{ width: '18rem',backgroundColor:'yellow'  }}>
                            <Card.Body className="text-center">
                                <Card.Title>ACTIVE CASES</Card.Title> 
                                <h3>{this.state.data.active}</h3>
                                <Card.Text>
                                [Today :{this.state.data.todayCases}]
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                          </div>
                          <div className="col-md-3">
                          <Card  style={{ width: '18rem',backgroundColor:'green'  }}>
                            <Card.Body className="text-center">
                                <Card.Title>RECOVERED</Card.Title>
                                <h3>{this.state.data.recovered}</h3>
                                <Card.Text>
                                [Today :{this.state.data.todayRecovered}]
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                          </div>
                          <div className="col-md-3">
                          <Card  style={{ width: '18rem',backgroundColor:'red'  }}>
                            <Card.Body className="text-center">
                                <Card.Title>DEATHS</Card.Title>
                                <h3>{this.state.data.deaths}</h3>
                                <Card.Text>
                                [Today :{this.state.data.todayDeaths}]
                                </Card.Text>
                                
                            </Card.Body>
                            </Card>
                          </div>
                       
                    </div>
                </div>
                <div className="col-md-12">
                   <Statedata/>
                </div>
            </div>
        )
    }

}
export default India;
