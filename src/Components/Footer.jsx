import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 border-[#e4e6e7] bg-white container mx-auto px-6 lg:px-16 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">Clothey</h3>
        <p className="text-lg sm:text-xl lg:text-2xl text-[#979a9b] lg:text-left lg:w-4/5">Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetur</p>
      </div>
      <div className="">
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">Shop</h3>
        <ul className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left flex flex-col space-y-3">
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/collection">Collection</Link>
          </li>
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/lookbook">Lookbook</Link>
          </li>
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/sale">Sale</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-3xl font-semibold mb-6 text-center lg:text-left">About</h3>
        <ul className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left text-[#979a9b]">
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/our-story">Our Story</Link>
          </li>
          <li className="text-[#979a9b] mx-auto lg:mx-0 hover:text-[#212529] duration-300 w-fit">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
