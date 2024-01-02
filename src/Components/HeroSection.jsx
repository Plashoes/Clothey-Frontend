import { Link } from "react-router-dom";
function HeroSection() {
  return (
    <div className="container mx-auto px-6 py-12 bg-cover bg-center" style={{ backgroundImage: "url(/images/hero.jpg)" }}>
      <div className="text-white w-full md:w-2/4">
        <h2 className="text-5xl lg:text-7xl text-center md:text-left font-bold mb-6">Love the Planet we walk on</h2>
        <p className="mb-6 text-xl text-center md:text-left font-light">Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 items-center justify-center sm:space-x-4 mb-8">
          <Link to="/collection/men" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP MEN</Link>
          <Link to="/collection/women" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP WOMEN</Link>
          <Link to="/collection/children" className="px-8 py-3 font-semibold bg-white text-[#212529] hover:bg-[#212529] hover:text-white duration-500">SHOP CHILDREN</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
