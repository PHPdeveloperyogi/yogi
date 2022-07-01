import React from "react";
import { OverlayTrigger } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Loginpage(){
    const{register,handleSubmit,formState:{errors},trigger} = useForm();

    const onSubmit = (data) =>{
        console.log(data);
    }
    // console.log(errors);
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>email</label>
                <input 
                    type='text'
                    className='form-control'
                    {...register('email',{required:'email is requried',
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message:'invalid email id'
                    }})}
                    onKeyDown={()=>{
                        trigger('email');
                    }}
                    />
                    {errors.email &&(<p className="text-danger">{errors.email.message}</p>)}
                <input 
                    type='password'
                    className="form-control"
                    {...register('password',{required:'password is requried'})}
                    onKeyDown={()=>{
                        trigger('password')
                    }}
                    />
                    {errors.password && (<p className="text-danger">{errors.password.message}</p>)}
                <input
                    type='submit'
                    name='submit'
                />
            </form>
        </div>
    )
}