import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../StateContext";
import Drawer from "@mui/material/SwipeableDrawer";

function Cart() {
  const appState = useContext(StateContext);
  const [openCart, setOpen] = useState(false);
  const toggleCart = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

  const [count, setCount] = useState();
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count == 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <p onClick={toggleCart(true)}>
        <i className="fa-solid fa-bag-shopping text-[#212529] text-2xl lg:text-lg xl:text-3xl cursor-pointer"></i>
      </p>
      <Drawer anchor="right" open={openCart} onClose={toggleCart(false)} onOpen={toggleCart(true)}>
        <div className="w-screen h-full md:max-w-screen-sm flex flex-col p-3">
          <div className="flex justify-between border-b-[1px] border-[#dddddd]">
            <p className="text-xl text-[#212529] pb-3">Shopping Cart</p>
            <button className="pb-3" onClick={toggleCart(false)}>
              <i className="fa-solid fa-x text-2xl text-[#212529]"></i>
            </button>
          </div>
          <div className="flex-grow pt-3 w-full">
            {appState.cart.map((details, index) => {
              return (
                <div className="flex justify-between items-center mb-6" key={index}>
                  <div className="flex items-center space-x-3">
                    <div className="max-w-[100px]">
                      <img src={details.img} alt="" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-lg font-semibold mb-3">{details.name}</p>
                      <div className="flex">
                        <button onClick={decrease} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                          -
                        </button>
                        <span className="text-[#212529] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] flex justify-center items-center">{details.count}</span>
                        <button onClick={increase} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="">
                      <p className="text-sm sm:text-lg font-semibold">${details.price * details.count}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <Link to="/cart" className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-6 py-4" onClick={toggleCart(false)}>
            View cart
          </Link>
          <Link to="/collection/all" className="mb-6 bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-6 py-4" onClick={toggleCart(false)}>
            Continue Shopping
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default Cart;
