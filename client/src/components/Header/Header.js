import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
    renderContent(){
        switch (this.props.auth) {
            case null:
                return null
                break;
            case false:
                return (<li><a href="/auth">Login With Google</a></li>)                
                break;
            default:
                return(
                    <div>
                        <li><Link to="#">{this.props.auth.name}</Link></li>                  
                        <li><a href="/auth/logout">Logout</a></li>
                    </div>
                )                
                break;
        }
    }

    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <div className="container">
                <Link to={this.props.auth ? '/surveys' : '/'} className="brand-logo">Emaily App</Link>
                <ul id="nav-mobile" className="right">
                    {this.renderContent()}
                </ul>
              </div>
            </div>
          </nav>        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Header);