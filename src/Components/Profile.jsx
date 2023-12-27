import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import Footer from "./Footer";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Profile() {
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const phoneNumber = localStorage.getItem("phoneNumber");

  const logout = () => {
    appDispatch({ type: "logout" });
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("email");
    localStorage.removeItem("phoneNumber");
    localStorage.removeItem("userToken");
    toast.info("Logout Out Successful");
    navigate("/");
  };

  return (
    <>
      <div className="px-0 md:px-6 py-12 bg-cover bg-center bg-[#f1f1ef]">
        <div className="container mx-auto bg-white px-6 py-12 ">
          <h1 className="text-[#212529] text-3xl font-bold mb-2">Profile</h1>
          <p className="mb-6 text-[#979a9b] text-lg">Manage your details and change your password</p>
          <h3 className="text-xl font-semibold mb-3">General Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 border-b-[1px] border-[#dddddd] pb-3">
            <div>
              <p className="font-bold mb-2">First Name</p>
              <input className="p-2 block w-full lg:w-[70%] focus:placeholder-transparent placeholder:duration-300 focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]" type="text" placeholder={firstName} />
            </div>
            <div>
              <p className="font-bold mb-2">Last Name</p>
              <input className="p-2 block w-full lg:w-[70%] focus:placeholder-transparent placeholder:duration-300 focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]" type="text" placeholder={lastName} />
            </div>
            <div className="text-center md:text-left">
              <button className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-bold text-center text-white duration-300 px-6 py-4 w-full md:w-fit">UPDATE INFO</button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 border-b-[1px] border-[#dddddd] pb-3">
            <div>
              <p className="font-bold mb-2">Email</p>
              <input className="p-2 block w-full lg:w-[70%] focus:placeholder-transparent placeholder:duration-300 focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]" type="text" placeholder={email} />
            </div>
            <div>
              <p className="font-bold mb-2">Phone Number</p>
              <input className="p-2 block w-full lg:w-[70%] focus:placeholder-transparent placeholder:duration-300 focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]" type="text" placeholder={phoneNumber} />
            </div>
            <div className="text-center md:text-left">
              <button className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-bold text-center text-white duration-300 px-6 py-4 w-full md:w-fit">UPDATE INFO</button>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#B23B3B] hover:bg-[#6b1d1d] duration-300 py-3 px-6 text-xl text-white" onClick={logout}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
