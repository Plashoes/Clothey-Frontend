import { useContext } from "react";
import StateContext from "../StateContext";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import SideMenu from "./SideMenu";

function Header() {
  const appState = useContext(StateContext);
  return (
    <div className="container mx-auto flex items-center justify-between p-6">
      <SideMenu />
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-3xl font-semibold lg:mr-10">Clothey</h1>
        </Link>

        <ul className="lg:flex space-x-6 text-[#979a9b] hidden">
          <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
            <Link to="/collection/all">
              <p>COLLECTION</p>
            </Link>
          </li>
          <Link to="/lookbook">
            <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
              <p>LOOKBOOK</p>
            </li>
          </Link>
          <Link to="/sale">
            <li className="hover:text-[#212529] duration-300 font-semibold cursor-pointer">
              <p>SALE</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center lg:space-x-6 text-[#979a9b]">
        <Link to="/our-story">
          <p className="hover:text-[#212529] duration-300 font-semibold cursor-pointer hidden lg:block">OUR STORY</p>
        </Link>
        <Link to="/contact">
          <p className="hover:text-[#212529] duration-300 font-semibold cursor-pointer hidden lg:block">CONTACT</p>
        </Link>

        {appState.loggedIn ? (
          <Link to={`/profile/${localStorage.getItem("firstName") + localStorage.getItem("lastName")}`}>
            <p className="hidden lg:block ">
              <i className="fa-solid fa-user text-[#212529] lg:text-lg xl:text-3xl cursor-pointer"></i>
            </p>
          </Link>
        ) : (
          <Link to="/login">
            <p className="hover:text-[#212529] duration-300 font-semibold cursor-pointer hidden lg:block">LOGIN</p>
          </Link>
        )}
        <Cart />
      </div>
    </div>
  );
}

export default Header;
