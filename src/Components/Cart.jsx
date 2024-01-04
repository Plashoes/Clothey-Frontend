import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../StateContext";
import axios from "axios";
import Drawer from "@mui/material/SwipeableDrawer";

function Cart() {
  const appState = useContext(StateContext);
  const [openCart, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState(null);
  const userToken = localStorage.getItem("userToken");
  const url = "https://clotheyapi-production.up.railway.app/carts/get-one";
  const removeURL = "https://clotheyapi-production.up.railway.app/carts/remove-from-cart?cart_item_id=";

  const toggleCart = (openStatus) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(openStatus);
  };

  useEffect(() => {
    const fetchCart = async () => {
      await axios
        .get(url, {
          headers: {
            Authorization: userToken,
          },
        })
        .then((res) => {
          setCartItems(res.data.items);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    if (openCart) {
      fetchCart();
    }
  }, [openCart]);

  const removeFromCart = async (id) => {
    await axios
      .delete(`${removeURL}${id}`, {
        headers: {
          Authorization: userToken,
        },
      })
      .then((res) => {
        setOpen(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <p className={appState.loggedIn ? "block" : "hidden"} onClick={toggleCart(true)}>
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
            {cartItems === null ? (
              <p className="text-center text-2xl font-semibold mt-20">Loading...</p>
            ) : !Array.isArray(cartItems) ? (
              <p className="text-center text-2xl font-semibold mt-20">Cart Is Empty</p>
            ) : (
              cartItems.map((item) => {
                return (
                  <div className="flex justify-between items-center mb-12 relative" key={item.id}>
                    <div className="flex items-center space-x-3">
                      <div className="max-w-[90px] h-[75px]">
                        <img src={item.product.main_image} alt="" />
                      </div>
                      <div>
                        <p className="text-sm sm:text-lg font-semibold mb-3">{item.product.name}</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center space-x-2">
                        <p className="text-sm sm:text-lg font-semibold">Price: </p>
                        <p className="text-sm sm:text-lg font-semibold">${item.product.inventory.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm sm:text-lg font-semibold">Quantity: </p>
                        <p className="text-sm sm:text-lg font-semibold">{item.quantity}</p>
                      </div>
                    </div>
                    <div className="absolute right-[-5px] top-[-13px] cursor-pointer" onClick={() => removeFromCart(item.id)}>
                      <i className="fa-solid fa-xmark text-lg text-[#B23B3B]"></i>
                    </div>
                  </div>
                );
              })
            )}
          </div>
          <Link to="/cart" className={cartItems === null || !Array.isArray(cartItems) ? "hidden" : "mb-6 bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-6 py-4"} onClick={toggleCart(false)}>
            View Cart
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
