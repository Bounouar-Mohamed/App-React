/*import React from 'react';
import axios from 'axios';
import MaterialTable from "material-table";

export default class PersonList extends React.Component {
  
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/users`)
      .then(res => {
        const persons = res.data.rows;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <div>
        <ul>
        { this.state.persons.map(person => <li>{person.nom}</li>)}
       </ul>
      <ul>
        { this.state.persons.map(person => <li>{person.prenom}</li>)}
      </ul>
      <ul>
        { this.state.persons.map(person => <li>{person.email}</li>)}
      </ul>
      <ul>
        { this.state.persons.map(person => <li>{person.password}</li>)}
      </ul>
      </div>
      
    )
  }
}*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import MaterialTable from 'material-table'


function Users() {

  const [data, setData] = useState([])

  React.state = {
    persons: []
  }

  const columns = [

    { title: "Nom", field: persons.prenom },
    { title: "Prénom", field: "person.prenom" },
    { title: "emal", field: "person.prenom" },
    { title: "Password", field: "person.prenom" }
  
  ]
  useEffect(() => {
    axios.get(`http://localhost:4000/users`)
    .then(res => {
      const persons = res.data.rows;
      this.setState({ persons });
    })
  }, [])

  return (
    <div className="App">

      <MaterialTable
        title="Users Data:"
        data={data}
        columns={columns}/>

    </div>
  );
}

export default Users;



import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import { get } from 'react-hook-form';

const columns = [
  {field: 'users_ID', headerName: 'ID'},
  {field: 'nom', headerName: 'Nom', width: 300},
  {field: 'prenom', headerName: 'Prénom', width: 600},
  {field: 'email', headerName: 'email', width: 600},
  {field: 'password', headerName: 'password', width: 600}
]

const Users = () => {

  const [tableData, setTableData] = useState([])

 useEffect(() => {
   get("http://localhost:4000/users")
    .then((data) => data.json())
    .then((data) => setTableData(data))
 })

  return (
    <div style={{height: 700, width: '100%'}}>
      <DataGrid 
        rows={tableData}
        columns={columns}
        pageSize={12}
        checkboxSelection
      />
    </div>
  )
}

export default Users;

*/

import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table'
import axios from 'axios';


const Users = () => {

  const [data, setData] = useState([]);

  const columns = [

    {title: 'ID', field: 'users_id', width: 200},
    {title: 'NOMS', field: 'nom', width: 200},
    {title: 'PRENOMS', field: 'prenom', width: 200},
    {title: 'EMAILS', field: 'email', width: 200},
    {title: 'PASSWORDS', field: 'password', width: 200}
  
  ]

 
  useEffect(() => {
    
axios.get        ("http://localhost:4000/users")
          .then(resp=>resp.data.rows)
          .then(resp => {
            console.log(resp)
            setData(resp)})
},[]);

  return (
      <div>
          <div >
      
       <MaterialTable style={{height: 400, width: '70%', left: '14%', top: 100}}
        columns={columns}
        data={data}
        title={"Data Users:"}
         />

        </div>
     </div>
    
  )}
export default Users;