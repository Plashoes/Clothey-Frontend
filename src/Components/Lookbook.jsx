import { useEffect } from "react";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function Lookbook() {

  useEffect(() => {
    document.title = `Clothy | Lookbook`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Search />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-7xl mb-6">Lookbook</h1>
      </div>
      <div className="md:px-8">
        <img src="/images/recycled-shoe-store-lookbook-cover-image-4.jpg" alt="" />
      </div>
      <div className="container mx-auto px-6 py-8 mb-20 md:flex">
        <h2 className="xl:text-center font-semibold text-[#212529] text-3xl xl:text-5xl mb-3 basis-2/4">Fall/Winter 2023</h2>
        <div className="basis-2/4">
          <p className="text-[#979a9b] text-lg xl:text-xl mb-3 xl:w-[75%]">Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">SHOP NOW</button>
        </div>
      </div>
      <div className="md:px-8">
        <img src="/images/recycled-shoe-store-lookbook-cover-image-3.jpg" alt="" />
      </div>
      <div className="container mx-auto px-6 py-8 mb-20 md:flex">
        <h2 className="xl:text-center font-semibold text-[#212529] text-3xl xl:text-5xl mb-3 basis-2/4">Spring/Summer 2023</h2>
        <div className="basis-2/4">
          <p className="text-[#979a9b] text-lg xl:text-xl mb-3 xl:w-[75%]">Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">SHOP NOW</button>
        </div>
      </div>
      <div className="md:px-8">
        <img src="/images/recycled-shoe-store-lookbook-cover-image-2.jpg" alt="" />
      </div>
      <div className="container mx-auto px-6 py-8 mb-20 md:flex">
        <h2 className="xl:text-center font-semibold text-[#212529] text-3xl xl:text-5xl mb-3 basis-2/4">Go & Play</h2>
        <div className="basis-2/4">
          <p className="text-[#979a9b] text-lg xl:text-xl mb-3 xl:w-[75%]">Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">SHOP NOW</button>
        </div>
      </div>
      <div className="md:px-8">
        <img src="/images/recycled-shoe-store-lookbook-cover-image-1.jpg" alt="" />
      </div>
      <div className="container mx-auto px-6 py-8 mb-20 md:flex">
        <h2 className="xl:text-center font-semibold text-[#212529] text-3xl xl:text-5xl mb-3 basis-2/4">Adventurer Gear</h2>
        <div className="basis-2/4">
          <p className="text-[#979a9b] text-lg xl:text-xl mb-3 xl:w-[75%]">Elementum donec leo vulputate sit proin suspendisse malesuada neque proin gravida ut platea vitae duis hac hac vel id ipsum ultricies ut faucibus ultrices.</p>
          <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">SHOP NOW</button>
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Lookbook;
