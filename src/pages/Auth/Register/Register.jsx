import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const Register = () => {
    const {registerUser, setUser} = useAuth()
    const navigate = useNavigate()
    


    const {
    register,
    handleSubmit,
    formState: {errors},
    } = useForm()


    const handleRegistration = (data) => {
      registerUser(data.email , data.password)
      .then(res => {
        setUser(res.user)
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


  return (
     <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto">
      <div className="card-body">
         <h1 className="text-4xl font-bold">Create an Account</h1>
         <p className="font-semibold pb-2">Register with ZapShift</p>
        <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="font-bold">Name</label>
          <input type="name" {...register('name', {required:true })} className="input outline-none" placeholder="Email" />
          {
            errors.name?.type === "required" && <p className="text-red-600">Name Required</p>
          }
          <label className="font-bold">Email</label>
          <input type="email" {...register('email', {required:true })} className="input outline-none" placeholder="Email" />
          {
            errors.email?.type === "required" && <p className="text-red-600">Email Required</p>
          }

          {/* password */}
          <label className="font-bold">Password</label>
          <input type="password" {...register('password',{required:true, pattern : /^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{6,}$/ })} className="input outline-none" placeholder="Password" />

          {
            errors.password?.type === "required" && <p className="text-red-500">Password required</p>
          }
          {
            errors.password?.type === "pattern" && <p className="text-red-500">Password must contain at least 1 uppercase letter, <br /> 1 lowercase letter, 1 special character, <br /> and be at least 6 characters long.</p>
          }
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>  
          <button className="btn bg-primary mt-2">Register</button>
           <p>Already have an account?<Link to={'/login'} className="text-primary font-bold text-xs">Login</Link></p>
          
          <p className="text-center text-lg font-semibold py-2">Or</p>
          <SocialLogin></SocialLogin>
        </fieldset>
      </form>
      </div>
    </div>
  );
};

export default Register;
