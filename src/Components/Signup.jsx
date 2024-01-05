import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { useState, useContext } from "react";
import DispatchContext from "../DispatchContext";
import axios from "axios";

function Signup() {
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  
  const URL = "https://clotheyapi-production.up.railway.app/users/signup";
  const regCharectars = /^[A-Za-z\s]*$/;
  const regNumbers = /^[0-9]+$/;
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [phone_number, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const attemptSignup = () => {
    if (first_name === "") {
      toast.error("Enter First Name");
      return;
    }
    if (!regCharectars.test(first_name)) {
      toast.error("Enter Correct First Name");
      return;
    }
    if (last_name === "") {
      toast.error("Enter Last Name");
      return;
    }
    if (!regCharectars.test(last_name)) {
      toast.error("Enter Correct Last Name");
      return;
    }
    if (email === "") {
      toast.error("Enter Email");
      return;
    }
    if (!regEmail.test(email)) {
      toast.error("Enter Correct Email");
      return;
    }
    if (phone_number === "") {
      toast.error("Enter Phone Number");
      return;
    }
    if (!regNumbers.test(phone_number) || phone_number.length != 11) {
      toast.error("Enter Correct Phone Number");
      return;
    }
    if (password === "") {
      toast.error("Enter Password");
      return;
    }
    if (password.length < 8) {
      toast.error("Password Must Be At Least 8 Charrecters Long");
      return;
    }
    if (repeat === "") {
      toast.error("Repeat Password Please");
      return;
    }
    if (password != repeat) {
      toast.error("Password Does Not Match");
      return;
    }
    toast.info("Attempting Sign Up");
    axios
      .post(URL, { first_name, last_name, email, password, phone_number })
      .then((res) => {
        toast.success("Sign Up Successful!");
        appDispatch({ type: "login" });
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("firstName", res.data.first_name);
        localStorage.setItem("lastName", res.data.last_name);
        localStorage.setItem("phoneNumber", res.data.phone_number);
        localStorage.setItem("userToken", res.data.authorization_token);
        navigate(`/profile/${localStorage.getItem("firstName") + localStorage.getItem("lastName")}`);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error Occurred Please Try Again");
      });
  };
  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center h-[120vh] sm:h-screen px-8 py-12 md:pt-0 sm:p-0 ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-2xl sm:text-3xl mb-4 text-[#212529]">Sign Up</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">First Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter First Name" type="text" onChange={(e) => setFirst(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Last Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Last Name" type="text" onChange={(e) => setLast(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Email</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Phone Number</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Phone Number" type="text" onChange={(e) => setPhone(e.target.value)} />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-4 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Repeat Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" onChange={(e) => setRepeat(e.target.value)} />
            </div>
          </div>

          <div className="text-center mb-5 sm:mb-10">
            <button onClick={attemptSignup} className="bg-[#212529] hover:bg-[#1c1f23] duration-300 text-white text-sm sm:text-lg py-3 px-16 rounded-xl inline-block">
              Sign Up
            </button>
          </div>
          <p className="text-[#212529] text-sm sm:text-base text-center">Already have and account ?</p>
          <Link to="/login">
            <p className="text-center text-lg sm:text-2xl font-bold cursor-pointer text-[#212529] hover:text-[#1c1f23] duration-300">Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
