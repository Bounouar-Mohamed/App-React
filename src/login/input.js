import '../App.css'
import {useForm} from 'react-hook-form';
import Password from './password';
import axios from 'axios';

   
const wait = function (duration = 1000){
    return new Promise ((resolve) => {
        window.setTimeout(resolve,duration)
    }
    )
}

export default function Input ()  {

        const { handleSubmit, register, resetField, formState  } = useForm()
        const { errors } = formState



        const onSubmit = async (data) =>{

            axios.post('http://localhost:4000/users', data)
            .then(response => {
              console.log("Status: ", response.status);
              console.log("Data: ", response.data);
            }).catch(error => {
              console.error('Something went wrong!', error);
            });


            resetField("name");
            resetField("lastname");
            resetField("email");
            await wait(2000)
        }

        const {isSubmitting} = formState 


    return(

    <header className='App-header'>
    <form class="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)} >

<div>  
    <center>
        <h1>inscription:</h1>

    <div>
        <input 
          type="text" 
          name="name"
          placeholder="Enter name"
          {...register("name", {
            required: "Please enter Name",
          })}/>
      <div className="invalid-feedback">
         {errors.name?.message}
      </div>
      </div>


      <div>
        <input 
          type="text" 
          name="lastname"            
          placeholder="Enter lastname"
          {...register("lastname", {
            required: "Please enter lastname",
          })}/>

      <div className="invalid-feedback"> 
        {errors.lastname?.message}
      </div>
      </div>

      <div>
        <input 
          type="text" 
          name="email" 
          placeholder="Enter email"
          {...register("email", {
            required: "Please enter email",
          })}/>

      <div className="invalid-feedback">
         {errors.email?.message}
      </div>
      </div>

<Password/>

<button disabled= {isSubmitting} name='submit' >Envoyer</button>

    </center>
</div>
</form>
</header>
)}
