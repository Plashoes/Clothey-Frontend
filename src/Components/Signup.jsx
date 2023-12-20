import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const attemptSignup = () => {
    toast.info("Attempting Sign Up");
    // toast.success("Login Successful");
    // toast.error("Login Failed");
  };
  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center h-full p-8 sm:p-0 ">
        <div className="py-6 px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-2xl sm:text-3xl mb-4 text-[#212529]">Sign Up</h2>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">First Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter First Name" type="text" />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Last Name</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Last Name" type="text" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Email</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Phone Number</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Phone Number" type="text" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-6">
            <div className="flex flex-col space-y-2 mb-4 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" />
            </div>
            <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
              <span className="sm:text-lg font-semibold text-[#212529]">Repeat Password</span>
              <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Password" type="Password" />
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
