import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <nav>
            <div class="nav-wrapper">
              <div className="container">
                <a href="#" class="brand-logo">Emaily App</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="#">Login With Google</a></li>
                </ul>
              </div>
            </div>
          </nav>        
        )
    }
}

export default Header;