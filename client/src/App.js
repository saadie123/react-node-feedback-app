import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';

const Landing = () => <h1>Landing</h1>;

const Dashboard = () => <h1>Dashboard</h1>;

const newSurvey = () => <h1>New Survey</h1>;

class App extends Component {
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

export default App;
