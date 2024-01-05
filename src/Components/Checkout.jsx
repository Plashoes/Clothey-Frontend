import { useState, useEffect } from "react";
import axios from "axios";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const userToken = localStorage.getItem("userToken");
  const url = "https://clotheyapi-production.up.railway.app/orders/place-order";
  const regNumbers = /^[0-9]+$/;
  const governates = [
    {
      id: 0,
      governorate: "المحافظة",
    },
    {
      id: 1,
      governorate: "القاهرة",
    },
    {
      id: 2,
      governorate: "اسوان",
    },
    {
      id: 3,
      governorate: "اسيوط",
    },
    {
      id: 4,
      governorate: "الاسكندرية",
    },
    {
      id: 5,
      governorate: "الاسماعلية",
    },
    {
      id: 6,
      governorate: "الاقصر",
    },
    {
      id: 7,
      governorate: "البحر الاحمر",
    },
    {
      id: 8,
      governorate: "البحيرة",
    },
    {
      id: 9,
      governorate: "الجيزة",
    },
    {
      id: 10,
      governorate: "الدقهلية",
    },
    {
      id: 11,
      governorate: "السويس",
    },
    {
      id: 12,
      governorate: "الشرقية",
    },
    {
      id: 13,
      governorate: "الغربية",
    },
    {
      id: 14,
      governorate: "الفيوم",
    },
    {
      id: 15,
      governorate: "القليوبية",
    },
    {
      id: 16,
      governorate: "المنوفية",
    },
    {
      id: 17,
      governorate: "المنيا",
    },
    {
      id: 18,
      governorate: "الوادي الجديد",
    },
    {
      id: 19,
      governorate: "بني سويف",
    },
    {
      id: 20,
      governorate: "بورسعيد",
    },
    {
      id: 21,
      governorate: "جنوب سيناء",
    },
    {
      id: 22,
      governorate: "حلوان",
    },
    {
      id: 23,
      governorate: "دمياط",
    },
    {
      id: 24,
      governorate: "سوهاج",
    },
    {
      id: 25,
      governorate: "شمال سيناء",
    },
    {
      id: 26,
      governorate: "قنا",
    },
    {
      id: 27,
      governorate: "كفر الشيخ",
    },
    {
      id: 28,
      governorate: "مطروح",
    },
    {
      id: 29,
      governorate: "السادس من اكتوبر",
    },
  ];
  const [governate, setGovernate] = useState("");
  const [address_line1, setAddress_line1] = useState("");
  const [address_line2, setAddress_line2] = useState("");
  const [building_number, setBuilding_number] = useState("");
  useEffect(() => {
    document.title = `Clothy | Checkout`;
    window.scrollTo(0, 0);
  }, []);

  const changeGovernate = (e) => {
    setGovernate(parseInt(e.target.value));
  };

  const placeOrder = async () => {
    console.log(governate);
    if (governate === "") {
      toast.error("Choose Governorate");
      return;
    }
    if (address_line1 === "") {
      toast.error("Enter City Name");
      return;
    }
    if (address_line2 === "") {
      toast.error("Enter Street Name");
      return;
    }
    if (building_number === "") {
      toast.error("Enter Building Number");
      return;
    }
    if (!regNumbers.test(building_number)) {
      toast.error("Enter Correct Buildng Number");
      return;
    }
    toast.info("Confirming Order");
    await axios
      .post(
        url,
        { governorate_id: governate, address_line1, address_line2, building_number },
        {
          headers: {
            Authorization: userToken,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Order Confirmed!");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Confirming Order Failed");
      });
  };

  return (
    <>
      <div className="bg-[#f1f1ef] py-6 px-3 md:px-8 xl:px-40 2xl:px-80 md:py-12">
        <div className="bg-white px-8 py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-6xl mb-6">Checkout</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="mb-6">
              <h3 className="text-center text-3xl font-bold mb-3">Delivery Details</h3>
              <p className="sm:text-lg font-semibold text-[#212529]">Payment Is Made On Delivery</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Governate</span>
                <select onChange={changeGovernate} className="border-[1px] border-[#e6e6e6] focus:outline-none text-[#212529] p-3" name="" id="">
                  {governates.map((governate, index) => {
                    return (
                      <option key={index} value={governate.id}>
                        {governate.governorate}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">City</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="City" type="text" onChange={(e) => setAddress_line1(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Street Name</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Street Name" type="text" onChange={(e) => setAddress_line2(e.target.value)} />
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Building Number</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Building Number" type="text" onChange={(e) => setBuilding_number(e.target.value)} />
              </div>
            </div>
            <button onClick={placeOrder} to="/collection" className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-14 sm:px-20 sm:text-xl py-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Checkout;
