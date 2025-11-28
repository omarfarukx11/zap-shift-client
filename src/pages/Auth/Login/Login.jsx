import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Login = () => {
  const {singInUser, setUser} =useAuth()
  const navigate = useNavigate()

  const handleSingIn = (data) => {
    singInUser(data.email , data.password)
    .then(result => {
      setUser(result.user)
      navigate('/')
       Swal.fire({
                position: "top-center",
                icon: "success",
                title: "login Success",
                showConfirmButton: false,
                timer: 1500,
              });
    })
    .catch(error => console.log(error))
  }
  

  
  

  const {
    register,
    handleSubmit,
    formState: {errors}

  } = useForm()

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Welcome Back</h1>
        <p className="font-semibold pb-2">Login with ZapShift</p>
       <form onSubmit={handleSubmit(handleSingIn)}>
         <fieldset className="fieldset">
          {/* email  */}
          <label className="font-bold">Email</label>
          <input type="email" {...register('email' , {required:true })} className="input outline-none" placeholder="Email" />
          {
            errors.email?.type === 'required' && <p className="text-red-500">Email Required</p>
          }
          {/* password */}
          <label className="font-bold">Password</label>
          <input type="password" {...register('password', {required:true})} className="input outline-none" placeholder="Password" />
            {
            errors.password?.type === 'required' && <p className="text-red-500">password Required</p>
            }
          <div>
            <a className="link link-hover underline">Forgot password?</a>
          </div>
          <button className="btn bg-primary mt-2">Login</button>
          <p>Don’t have any account? <Link to={'/register'} className="text-primary font-bold text-xs">Register</Link></p>
          
          <p className="text-center text-lg font-semibold py-2">Or</p>

          <SocialLogin></SocialLogin>
        </fieldset>
       </form>
      </div>
    </div>
  );
};

export default Login;
