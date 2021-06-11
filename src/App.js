import React, { Component } from 'react';
import TodoApp from './Components/TodoApp/TodoApp';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


class App extends Component{
  render(){
    return(
    
    <Router>
      <Header/>
      <Route path="/" exact component={TodoApp}></Route>
      <Route path="/about" component={About}></Route>
    </Router>
     
    )
  }
}





export default App;

/*import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link

} from  'react-router-dom'
import India from './Components/India';
import World from './Components/World';
import Header from './Components/Header';
import Statedata from './Components/Statedata';

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="container-fluid">
      <Router>
        <Header/>
        <Switch>
           <Route exact path="/">
             <India/>
           </Route>
           <Route path="/india">
            <India/>
           </Route>
           <Route path="/world">
             <World/>
           </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default App;


*********************************




import Home from './Home';
import About from './About';
import Contactt from './Contactt';
import Item from './Item';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
class App extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
     <Router>
       <div>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/contactt">Contact</Link>
           </li>
           <li>
             <Link to="/item/1">First Item</Link>
           </li>
           <li>
             <Link to="/item/2">Second Item</Link>
           </li>
           <li>
             <Link to="/item/3">Third Item</Link>
           </li>
         </ul>
       </div>
       <switch>
         <Route exact path="/">
               <Home/>
         </Route>
         <Route path="/about">
           <About/>
         </Route>
         <Route path="/Contactt">
           <Contactt/>
         </Route>
         <Route path='/item/:id'>
          <Item/>
         </Route>
       </switch>
     </Router>
    )
  }
}*/



