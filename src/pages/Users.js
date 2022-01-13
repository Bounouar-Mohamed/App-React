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
    
        axios.get("http://localhost:4000/users")
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
        title={"Data Users"}
         />

        </div>
     </div>
    
  )}
export default Users;