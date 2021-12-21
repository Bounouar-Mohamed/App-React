import './App.css';
import logo from './christmas.png';
import {useForm} from 'react-hook-form';
import axios from 'axios';


const wait = function (duration = 1000 ) {
  return new Promise ((resolve)=> {
    window.setTimeout(resolve,duration)
  })
}


export default function Formulaire ()  {
  const { register, handleSubmit, formState  } = useForm()

  const onSubmit = async data =>{
    await wait(2000)


  axios.post('http://localhost:4000/users',data)
  .then(response => {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
  }).catch(error => {
    console.error('Something went wrong!', error);
  });
}


  const {isSubmitting} = formState 
  
     return (

          <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />


          <form onSubmit={handleSubmit(onSubmit)}>
    
    <h1>  Inscriptions: </h1>

        <div className="row">

         <div>
              <input 
                type="text" 
                className="form-control"
                name="nom" 
                id="nom"
                {...register('nom', { required: true })}                
                placeholder="Enter nom"/>

            </div>
    
            <div>
              <input 
                type="text" 
                name="prénom" 
                className="form-control"
                id="prénom"
                {...register('prénom', { required: true })}        
                        
                placeholder="Enter prénom"/>
    
            </div>
    
            <div>
              <input 
                type="text" 
                name="email" 
                className="form-control"
                id="email" 
                {...register('email', { required: true })}                
                placeholder="Enter email"/>
    
            </div>
     
            <div>
              <input 
                type="password" 
                name="password" 
                className="form-control"
                id="password"
                placeholder="mot de passe"
                {...register('password', {required: true })}/>
    
            </div>
    
            <div>
              <input 
                type="password" 
                name="confirm_password" 
                className="form-control"
                id="confirm_password"
                placeholder="confirmer le mot de passe" 
                {...register('confirm_password', {required: true})} />               
    
            </div>
          </div>
            
    
                          <button disabled={isSubmitting} value="envoyer" name="submit">S'inscrire </button>
    
            
          </form>
          </header>
)}
    