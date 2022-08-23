import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListToDosComponent from './components/ListToDosComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateToDoComponent from './components/CreateToDoComponent';
import UpdateToDoComponent from './components/UpdateToDoComponent';
import ViewToDoComponent from './components/ViewToDoComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListToDosComponent}></Route>
                          <Route path = "/todos" component = {ListToDosComponent}></Route>
                          <Route path = "/add-todo" component = {CreateToDoComponent}></Route>
                          <Route path = "/view-todo/:todos_id" component = {ViewToDoComponent}></Route>
                          <Route path = "/update-todo/:todos_id" component = {UpdateToDoComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
