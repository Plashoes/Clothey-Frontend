import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function CartPage() {
  let URL = "https://clotheyapi-production.up.railway.app/products/filter?size=4";
  const [products, setProducts] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    document.title = `Clothy | Cart`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setProducts(res.data);
          setFetching(false);
        })
        .catch((e) => console.log(e));
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="bg-[#f1f1ef] py-6 px-3 md:px-8 xl:px-40 2xl:px-80 md:py-12">
        <div className="bg-white px-8 py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-center text-[#212529] font-semibold text-5xl xl:text-6xl mb-6">Cart</h1>
          </div>
          <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-8">
            <div className="grow border-[1px] border-[#e6e6e6]">
              <div className="bg-[#f1f1ef] text-[#979a9b] py-5 px-5 text-2xl font-bold">
                <p>Cart Items</p>
              </div>
              {fetching ? (
                <>
                  <div className="flex items-center space-x-2 px-6 py-3">
                    <Skeleton variant="rectangle" animation="wave" width={75} height={75} />
                    <div>
                      <Skeleton variant="text" className="w-[100px] sm:w-[400px] md:w-[500px]" animation="wave" />
                      <Skeleton variant="text" animation="wave" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-6 py-3">
                    <Skeleton variant="rectangle" animation="wave" width={75} height={75} />
                    <div>
                      <Skeleton variant="text" className="w-[100px] sm:w-[400px] md:w-[500px]" animation="wave" />
                      <Skeleton variant="text" animation="wave" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 px-6 py-3">
                    <Skeleton variant="rectangle" animation="wave" width={75} height={75} />
                    <div>
                      <Skeleton variant="text" className="w-[100px] sm:w-[400px] md:w-[500px]" animation="wave" />
                      <Skeleton variant="text" animation="wave" />
                    </div>
                  </div>
                </>
              ) : (
                products.map((product, index) => {
                  return (
                    <div className="flex flex-col lg:flex-row space-x-2 space-y-2 lg:space-y-0 justify-between items-center border-[1px] border-t-0 px-6 py-3 border-[#e6e6e6]" key={index}>
                      <div className="flex flex-col sm:flex-row space-x-3 items-center lg:w-[55%]">
                        <div className="mb-3 sm:mb-0">
                          <img className="w-[75px]" src={product.main_image} alt="" />
                        </div>
                        <p className="text-[#212529] text-sm sm:text-base">{product.name}</p>
                      </div>
                      <div className="text-center lg:w-[100px]">
                        <p className="text-[#212529] text-sm sm:text-base">Price: ${product.inventory.price}</p>
                      </div>
                      <div className="text-center lg:w-[100px]">
                        <p className="text-[#212529] text-sm sm:text-base">Quantity: 2</p>
                      </div>
                      <div className="text-center lg:w-[120px]">
                        <p className="text-[#212529] text-sm sm:text-base">Subtotal: ${product.inventory.price * 2}</p>
                      </div>
                    </div>
                  );
                })
              )}
              {/*  */}
            </div>
            <div className="border-[1px] border-[#e6e6e6] flex flex-col justify-between">
              <div className="mb-8">
                <div className="bg-[#f1f1ef] text-[#979a9b] py-5 px-5 text-2xl font-bold">
                  <p className="text-center">Cart Totals</p>
                </div>
                {fetching ? (
                  <div className="mt-8">
                    <Skeleton variant="text" className="mb-6" animation="wave" />
                    <Skeleton variant="text" animation="wave" />
                    <Skeleton variant="text" className="mb-6" animation="wave" />
                    <Skeleton variant="text" animation="wave" />
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between space-x-4 px-8 py-2 text-[#979a9b] font-semibold border-b-[1px] border-[#e6e6e6]">
                      <p className="text-lg">Subtotal</p>
                      <p className="text-lg">$1000</p>
                    </div>
                    <div className="flex justify-between space-x-2 px-8 py-2 text-[#979a9b] font-semibold">
                      <p className="text-lg">Total</p>
                      <p className="text-lg">$1000</p>
                    </div>
                  </>
                )}
              </div>
              <Link to="/checkout" className="bg-[#6e7051] hover:bg-[#212529] font-semibold text-center text-white duration-300 px-6 py-4">Proceed To Checkout</Link>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default CartPage;
