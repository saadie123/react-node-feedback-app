import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import Landing from './components/Landing/Landing';
import Header from './components/Header/Header';
import './App.css';


const Dashboard = () => <h1>Dashboard</h1>;

const newSurvey = () => <h1>New Survey</h1>;

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={newSurvey} />
            </Switch>
          </div>
      </div>
    );
  }
}


export default connect(null, actions)(App);
