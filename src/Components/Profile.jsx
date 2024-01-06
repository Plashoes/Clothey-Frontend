import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import Footer from "./Footer";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Profile() {
  useEffect(() => {
    document.title = `Clothy | Profile`;
    window.scrollTo(0, 0);
  }, []);
  const regEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const regNumbers = /^[0-9]+$/;
  const url = "https://clotheyapi-production.up.railway.app/users/update";
  const orderURL = "https://clotheyapi-production.up.railway.app/orders/my-orders";
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      await axios
        .get(orderURL, {
          headers: {
            Authorization: userToken,
          },
        })
        .then((res) => {
          setOrders(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    fetchOrders();
  }, []);

  console.log(orders);

  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const phoneNumber = localStorage.getItem("phoneNumber");
  const userToken = localStorage.getItem("userToken");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [update1, setUpdate1] = useState(false);
  const [update2, setUpdate2] = useState(false);

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

  const updateGeneral = async () => {
    let data = {
      first_name: first,
      last_name: last,
    };
    if (first === "") {
      delete data.first_name;
    }
    if (last === "") {
      delete data.last_name;
    }
    if (Object.keys(data).length == 0) {
      return;
    }
    await axios
      .patch(url, data, {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Profile Updated!");
        localStorage.setItem("userToken", res.data.authorization_token);
        localStorage.setItem("firstName", res.data.first_name);
        localStorage.setItem("lastName", res.data.last_name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("phoneNumber", res.data.phone_number);
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateSecurity = async () => {
    let data = {
      email: mail,
      phone_number: phone,
      password,
    };
    if (mail === "") {
      delete data.email;
    }
    if (mail != "" && !regEmail.test(mail)) {
      toast.error("Enter Correct New Email");
      return;
    }
    if (phone === "") {
      delete data.phone_number;
    }
    if (phone != "" && (phone.length != 11 || !regNumbers.test(phone))) {
      toast.error("Enter Correct Phone Number");
      return;
    }
    if (password === "") {
      delete data.password;
    }
    if (password != "" && password.length < 8) {
      toast.error("Password Must Be At Least 8 Charecters Long");
      return;
    }
    if (Object.keys(data).length == 0) {
      return;
    }
    await axios
      .patch(url, data, {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userToken", res.data.authorization_token);
        localStorage.setItem("firstName", res.data.first_name);
        localStorage.setItem("lastName", res.data.last_name);
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("phoneNumber", res.data.phone_number);
        location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="px-0 md:px-6 py-12 bg-cover bg-center bg-[#f1f1ef]">
        <div className="container mx-auto bg-white px-6 py-12">
          <h1 className="text-[#212529] text-3xl font-bold mb-2">Profile</h1>
          <p className="mb-6 text-[#979a9b] text-lg">Manage Your Details And Change Your Password</p>
          <h3 className="text-xl font-semibold mb-3">General Info</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 border-b-[1px] border-[#dddddd] pb-3">
            <div>
              <p className="font-bold mb-2">First Name</p>
              <input
                className="p-2 block w-full lg:w-[70%]  focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]"
                type="text"
                placeholder={firstName}
                onChange={(e) => {
                  setFirst(e.target.value);
                  setUpdate1(true);
                }}
              />
            </div>
            <div>
              <p className="font-bold mb-2">Last Name</p>
              <input
                className="p-2 block w-full lg:w-[70%] focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]"
                type="text"
                placeholder={lastName}
                onChange={(e) => {
                  setLast(e.target.value);
                  setUpdate1(true);
                }}
              />
            </div>
            <div className="text-center md:text-left">
              <button disabled={!update1} className={update1 ? "mb-6 bg-[#6e7051] hover:bg-[#212529] font-bold text-center text-white duration-300 px-6 py-4 w-full md:w-fit" : "mb-6 bg-[#f0f1f4]  font-bold text-center text-[#cbcfd7] px-6 py-4 w-full md:w-fit"} onClick={updateGeneral}>
                UPDATE INFO
              </button>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3">Security</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6 border-b-[1px] border-[#dddddd] pb-3">
            <div>
              <p className="font-bold mb-2">Email</p>
              <input
                className="p-2 block w-full focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]"
                type="text"
                placeholder={email}
                onChange={(e) => {
                  setMail(e.target.value);
                  setUpdate2(true);
                }}
              />
            </div>
            <div>
              <p className="font-bold mb-2">Phone Number</p>
              <input
                className="p-2 block w-full focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]"
                type="text"
                placeholder={phoneNumber}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setUpdate2(true);
                }}
              />
            </div>
            <div>
              <p className="font-bold mb-2">Password</p>
              <input
                className="p-2 block w-full focus:outline-none placeholder:text-[#212529] border-[1px] border-[#dddddd]"
                type="password"
                placeholder="********"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setUpdate2(true);
                }}
              />
            </div>
            <div className="text-center md:text-left">
              <button disabled={!update2} className={update2 ? "mb-6 bg-[#6e7051] hover:bg-[#212529] font-bold text-center text-white duration-300 px-6 py-4 w-full md:w-fit" : "mb-6 bg-[#f0f1f4]  font-bold text-center text-[#cbcfd7] px-6 py-4 w-full md:w-fit"} onClick={updateSecurity}>
                UPDATE INFO
              </button>
            </div>
          </div>
          <h1 className="text-[#212529] text-3xl font-bold mb-2">Orders</h1>
          <p className="mb-6 text-[#979a9b] text-lg">View Your Order History</p>
          {orders == null ? (
            <p className="mb-6 font-semibold text-lg">Loading...</p>
          ) : orders.length == 0 ? (
            <p className="mb-6 font-semibold text-lg">You Haven&apos;t Made Any Orders</p>
          ) : (
            orders.map((order, index) => {
              const inputDate = new Date(order.order_date);
              const day = inputDate.getUTCDate();
              const month = inputDate.getUTCMonth() + 1;
              const year = inputDate.getFullYear();
              return (
                <div className="mb-4" key={index}>
                  <div className="flex gap-1 items-center">
                    <p className="font-bold text-lg">Order Price:</p>
                    <p className="text-lg font-semibold">{order.order_total}EGP</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-bold text-lg">Delivery Address:</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <p className="text-lg font-semibold">Governorate: </p>
                        <p className="text-lg font-semibold">{order.address.governorate.governorate}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-lg font-semibold">City: </p>
                        <p className="text-lg font-semibold">{order.address.address_line1}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-lg font-semibold">Street Name: </p>
                        <p className="text-lg font-semibold">{order.address.address_line2}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-lg font-semibold">Building Number: </p>
                        <p className="text-lg font-semibold">{order.address.building_number}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center">
                    <p className="font-bold text-lg">Order Date:</p>
                    <p className="text-lg font-semibold">{`${day}/${month}/${year}`}</p>
                  </div>
                </div>
              );
            })
          )}
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
