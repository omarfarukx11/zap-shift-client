import React from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSingIn , setUser} = useAuth();
  const navigate = useNavigate()
  const location = useLocation()

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || '/')
         Swal.fire({
          position: "top-center",
          icon: "success",
          title: "login Success",
          showConfirmButton: false,
          timer: 1500,
        });

      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      onClick={handleGoogleSingIn}
      className="btn bg-base-200 text-black border-[#e5e5e5]"
    >
      <FcGoogle />
      Login with Google
    </div>
  );
};

export default SocialLogin;
