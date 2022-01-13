import {useForm} from 'react-hook-form';


    export default function Password ()  {

        const { handleSubmit, register, watch,  resetField, formState  } = useForm()
        
        const { errors } = formState
        const password = useForm({});
        password.current = watch("password", "");


        const onSubmit = async data =>{

            resetField("password");
            resetField("confirm_password");
        }
    

    return(

        <form class="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)} >

    <div>

        <input 
          type="password" 
          name="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Please enter password",
            minLength: {value:8, message: 'Trop petit'}
          })}/>

      <div className="invalid-feedback">
         {errors.password?.message}
      </div>
      </div>


      <div>
        <input 
          type="password" 
          name="confirm_password"            
          placeholder="confirm password"
          {...register("confirm_password", {
            required: "Please confirm password",
            validate: value =>
            value === password.current || "Ne correspond pas"
          })}/>

      <div className="invalid-feedback"> 
        {errors.confirm_password?.message}
      </div>
      </div>


</form>
)}
