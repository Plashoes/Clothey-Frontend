import { useEffect } from "react";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function Checkout() {
  useEffect(() => {
    document.title = `Clothy | Checkout`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#f1f1ef] py-6 px-3 md:px-8 xl:px-40 2xl:px-80 md:py-12">
        <div className="bg-white px-8 py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-6xl mb-6">Checkout</h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-3">
            <h3 className="text-center text-3xl font-bold">Customer information</h3>
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">First Name</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="First Name" type="text" />
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Last Name</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Last Name" type="text" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Email</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Email" type="text" />
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Phone Number</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Phone Number" type="text" />
              </div>
            </div>
            <h3 className="text-center text-3xl font-bold mb-6">Billing Details</h3>

            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Governate</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Governate" type="text" />
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">City</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="City" type="text" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-6">
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Street Name</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Street Name" type="text" />
              </div>
              <div className="flex flex-col space-y-2 mb-5 md:w-[288px]">
                <span className="sm:text-lg font-semibold text-[#212529]">Building Number</span>
                <input className="text-lg p-3 focus:outline-none border-[1px] border-[#e6e6e6]" placeholder="Building Number" type="text" />
              </div>
            </div>
            <button to="/collection" className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-14 sm:px-20 sm:text-xl py-4">
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
