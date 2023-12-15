import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const menu = useRef(null);
  const toggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
      menu.current.classList.remove("left-0");
      menu.current.classList.add("left-[-25000px]");
      menu.current.classList.remove("opacity-100");
      document.body.classList.remove("overflow-hidden");
    } else {
      setMenuVisible(true);
      menu.current.classList.add("left-0");
      menu.current.classList.remove("left-[-25000px]");
      menu.current.classList.add("opacity-100");
      document.body.classList.add("overflow-hidden");
    }

    menu.current.classList.remove("translate-x-[-786px]");
  };
  return (
    <div className="container mx-auto flex items-center justify-between p-6">
      <div className="block lg:hidden" onClick={toggleMenu}>
        <i className="fa-solid fa-bars text-2xl text-[#979a9b] hover:text-[#212529] duration-300"></i>
      </div>
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl font-semibold lg:mr-10">Plashoe</h1>
        </Link>

        <ul className="lg:flex space-x-6 text-[#979a9b] hidden">
          <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
            <p>COLLECTION</p>
          </li>
          <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
            <p>LOOKBOOK</p>
          </li>
          <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
            <p>SALE</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center lg:space-x-6 text-[#979a9b]">
        <p className="hover:text-[#212529] duration-300 font-semibold cursor-pointer hidden lg:block">OUR STORY</p>
        <p className="hover:text-[#212529] duration-300 font-semibold cursor-pointer hidden lg:block">CONTACT</p>
        <p>
          <i className="fa-solid fa-bag-shopping text-[#212529] text-2xl lg:text-lg xl:text-3xl cursor-pointer"></i>
        </p>
        <Link to="/login">
          <p className="hidden lg:block ">
            <i className="fa-solid fa-user text-[#212529] lg:text-lg xl:text-3xl cursor-pointer"></i>
          </p>
        </Link>
      </div>
      <div ref={menu} className="absolute w-screen h-screen opacity-100 bg-white top-0 left-[-25000px]  py-16 transition-all duration-300">
        <button className="absolute right-0 top-0 p-4 text-[#979a9b] hover:text-[#212529] duration-300" onClick={toggleMenu}>
          <i className="fa-solid fa-x text-3xl "></i>
        </button>
        <ul className="text-[#979a9b] ">
          <Link to="/login" onClick={toggleMenu}>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <i className="fa-solid fa-user text"></i>
          </li>
          </Link>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <p>COLLECTION</p>
          </li>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <p>LOOKBOOK</p>
          </li>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <p>SALE</p>
          </li>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <p>OUR STORY</p>
          </li>
          <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
            <p>CONTACT</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
