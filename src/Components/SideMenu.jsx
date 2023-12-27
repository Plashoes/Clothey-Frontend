import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/SwipeableDrawer";

function Cart() {
  const [openMenu, setOpen] = useState(false);
  const toggleMenu = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };
  return (
    <>
      <div className="block lg:hidden" onClick={toggleMenu(true)}>
        <i className="fa-solid fa-bars text-2xl text-[#979a9b] hover:text-[#212529] duration-300"></i>
      </div>
      <Drawer anchor="left" open={openMenu} onClose={toggleMenu(false)} onOpen={toggleMenu(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3 relative">
          <button className="absolute right-0 top-0 p-4 text-[#979a9b] hover:text-[#212529] duration-300" onClick={toggleMenu(false)}>
            <i className="fa-solid fa-x text-3xl "></i>
          </button>
          <ul className="text-[#979a9b] ">
            <Link to="/login" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <i className="fa-solid fa-user text"></i>
              </li>
            </Link>
            <Link to="/collection" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <p>COLLECTION</p>
              </li>
            </Link>
            <Link to="/lookbook" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <p>LOOKBOOK</p>
              </li>
            </Link>
            <Link to="/sale" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <p>SALE</p>
              </li>
            </Link>
            <Link to="/our-story" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <p>OUR STORY</p>
              </li>
            </Link>
            <Link to="/contact" onClick={toggleMenu(false)}>
              <li className="text-xl border-b-2 border-[#e6e6e6] px-8 py-4 hover:text-[#212529] duration-300">
                <p>CONTACT</p>
              </li>
            </Link>
          </ul>
        </div>
      </Drawer>
    </>
  );
}

export default Cart;
