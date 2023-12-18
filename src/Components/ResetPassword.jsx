import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ResetPassword() {
  const attemptReset = () => {
    toast.info("Check Your Email");
  };

  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center login">
        <div className="py-6 px-4 sm:px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-[#212529]">Reset Password</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="mb-6 text-lg font-semibold text-[#212529]">Enter Email Linked to Your Profile</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Email" type="text" />
          </div>
          <div className="text-center mt-12">
            <button onClick={attemptReset} className="bg-[#212529] hover:bg-[#1c1f23] duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Send Retrival Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
