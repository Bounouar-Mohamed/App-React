import React, { Component } from 'react';
import  { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import '../App.css';
import Inscription from '../pages/Inscription';
import Users from '../pages/Users';
import Acceuil from '../pages/acceuil';

export default class App extends Component{

  render(){
    return(

      <Router>
        <div className='App'>
          <ul className='App-link'>
            
    
              <Link to="/" id='buttom-a'> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Acceuil </button> </Link> 
          
              <Link to="/inscription" id='buttom-b'><button>Inscription </button></Link>
        
              <Link to="/users" id='buttom-c'><button>Users </button></Link>
  

          </ul>
          
<Routes>
  <Route exact path="/" element={<Acceuil />}/>
  <Route exact path="/inscription" element={<Inscription />}/>
  <Route exact path="/users" element={<Users />}/>
</Routes>

        </div>
      </Router>
    )
}}