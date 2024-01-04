import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function ResetCode() {
  const navigate = useNavigate();
  const url = "https://clotheyapi-production.up.railway.app/users/confirm-reset-code";
  const [code, setCode] = useState("");

  const confirmCode = async () => {
    if (code === "") {
      toast.error("Enter Code");
      return;
    }

    await axios
      .post(url, { code })
      .then((res) => {
        toast.success("Correct Code");
        navigate("/new-password");
      })
      .catch((e) => {
        toast.error("Incorrect Code");
      });
  };

  return (
    <div className="bg-[#212529]">
      <div className="container mx-auto flex justify-center items-center login">
        <div className="py-6 px-4 sm:px-10 shadow-md rounded-xl bg-white">
          <h2 className="text-center font-bold text-3xl mb-4 text-[#212529]">Enter Code</h2>
          <div className="flex flex-col space-y-2 mb-5 md:w-[300px]">
            <span className="mb-6 text-lg font-semibold text-[#212529] text-center">Enter Code Sent To Your Email</span>
            <input className="bg-white border-b-2 border-[#e6e6e6] focus:placeholder-transparent placeholder:duration-300 focus:outline-none" placeholder="Enter Code" type="text" onChange={(e) => setCode(e.target.value)} />
          </div>
          <div className="text-center mt-12">
            <button onClick={confirmCode} className="bg-[#212529] hover:bg-[#1c1f23] duration-300 text-white text-lg py-3 px-16 rounded-xl inline-block">
              Confirm Retrival Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetCode;
