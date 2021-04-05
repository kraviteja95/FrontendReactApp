import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployee from './components/ListEmployee';
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
    return (

      <div>
        <Router>
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployee}></Route>
              <Route path="/employees" component={ListEmployee}></Route>
              <Route path="/add-employee/:id" component={CreateEmployee}></Route>
              <Route path="/view-employee/:id" component={ViewEmployee}></Route>
              {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
            </Switch>
          </div>
        </Router>
      </div>

    );
  }

export default App;