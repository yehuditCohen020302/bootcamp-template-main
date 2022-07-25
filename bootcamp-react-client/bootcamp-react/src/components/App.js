import '../App.css';
import React from 'react'
import {
  BrowserRouter as Router, Route} from 'react-router-dom';
import ManagerPage from './ManagerPage'


function App() {
  return (
    <Router>
        <Route path='/' exact> 
          <ManagerPage/>
        </Route>
    </Router>
  );
}

export default App;
