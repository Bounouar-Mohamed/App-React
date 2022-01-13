import axios from 'axios'; 
import Input from '../login/input';


export default function Post ()  {


  axios.post('http://localhost:4000/users', data)
    .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
    }).catch(error => {
      console.error('Something went wrong!', error);
    });
}