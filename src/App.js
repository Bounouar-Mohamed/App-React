import React, { Component } from 'react';
import  { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Formulaire from './form';
import Users from './db';
import Acceuil from './acceuil';


export default class App extends Component{

  render(){
    return(

      <Router>

        <div className='App'>
          <ul className='App-link'>
            
            <li> 
              <Link to="/" id='buttom-a'>Acceuil</Link>
            </li>
            <li>
              <Link to="/inscription" id='buttom-b'>Inscription</Link>
            </li>
            <li>
              <Link to="/users" id='buttom-c'>Users</Link>
            </li>

          </ul>
          
<Routes>
  <Route exact path="/" element={<Acceuil />}/>
  <Route exact path="/inscription" element={<Formulaire />}/>
  <Route exact path="/users" element={<Users />}/>
</Routes>

        </div>
      </Router>
    )
}}