import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
class Header extends Component{
    render(){
        return(
          <header>
             
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
          </header>
        )
    }
}
export default Header;