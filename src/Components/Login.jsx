import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";

import "react-toastify/dist/ReactToastify.css";

function Login() {
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const URL = "https://clotheyapi-production.up.railway.app/users/signin";
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async () => {
    if (email === "") {
      toast.error("Enter Email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
      return;
    }
    if (password === "") {
      toast.error("Enter Password");
      return;
    }
    toast.info("Attempting Login");
    await axios
      .post(URL, { email, password })
      .then((res) => {
        toast.success("Login Successful!");
        localStorage.setItem("userToken", res.data.authorization_token);
        localStorage.setItem("firstName", res.data.first_name);
        localStorage.setItem("lastName", res.data.last_name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("phoneNumber", res.data.phone_number);
        appDispatch({
          type: "login",
        });
        navigate(`/profile/${localStorage.getItem("firstName") + localStorage.getItem("lastName")}`);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Incorrect Email Or Password");
      });
  };

  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center login ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-[#212529]">Login</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-[#212529]">Email</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="text-lg font-semibold text-[#212529]">Password</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
            <Link to="/reset-password" className="">
              <p className="text-right text-xs md:text-base font-bold text-[#212529]">Forgot Password ?</p>
            </Link>
          </div>
          <div className="text-center mb-16">
            <button onClick={attemptLogin} className="bg-[#212529] hover:bg-[#1c1f23] duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Login
            </button>
          </div>
          <p className="text-[#212529] text-center">Don&apos;t have and account ?</p>
          <Link to="/signup">
            <p className="text-center text-lg sm:text-2xl font-bold cursor-pointer text-[#212529] hover:text-[#1c1f23] duration-300">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
