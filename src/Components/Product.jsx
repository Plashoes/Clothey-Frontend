import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import StateContext from "../StateContext";
import Skeleton from "@mui/material/Skeleton";
import Search from "./Search";
import Related from "./Related";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function Product() {
  const appState = useContext(StateContext);
  const navigate = useNavigate();

  const URL = "https://clotheyapi-production.up.railway.app/products/get-one?id=";
  const orderURL = "https://clotheyapi-production.up.railway.app/carts/add-to-cart";
  const [fetching, setFetching] = useState(true);
  const userToken = localStorage.getItem("userToken");
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Clothy | ${fetching ? "" : product.name}`;
    window.scrollTo(0, 0);
  }, [product]);

  useEffect(() => {
    setFetching(true);
    let currentURL = window.location.href;
    const currentID = currentURL.match(/\d+$/)[0];
    const fetchProduct = async () => {
      await axios.get(`${URL + currentID}`).then((res) => {
        setProduct(res.data);
        setFetching(false);
      });
    };
    fetchProduct();
  }, []);
  
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

  const placeOrder = async () => {
    if (!appState.loggedIn) {
      navigate("/login");
      toast.info("Login To Add Items To Cart")
      return;
    }
    if(count > product.inventory.qty_in_stock){
      toast.error(`Only ${product.inventory.qty_in_stock} left in stock`);
      return;
    }
    toast.info("Adding To Cart");
    axios.post(orderURL, {product_id: product.id, quantity: count},{
      headers: {
        Authorization: userToken,
      },
    }).then(() => {
      toast.success("Added To Cart Successfully");
    }).catch((e) => {
      toast.error("Failed Adding To Cart, Please Try Again");
      console.log(e);
    })
  }

  return (
    <>
      <Search />
      <div className="bg-[#f1f1ef] p-3 pt-0 lg:py-14 lg:pt-0  xl:px-32">
        {fetching ? (
          <>
            <div className="container p-6 pb-0 lg:pt-12 lg:px-24 bg-white flex flex-col md:flex-row md:space-x-12 md:items-center">
              <div>
                <Skeleton variant="rectangle" animation="wave" width={250} height={250} />
              </div>
              <div className="lg:basis-2/4">
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <div>
                  <div className="flex mb-4">
                    <button onClick={decrease} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                      -
                    </button>
                    <span className="text-[#212529] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] flex justify-center items-center">{count}</span>
                    <button onClick={increase} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                      +
                    </button>
                    <button className="bg-[#6e7051] hover:bg-[#212529] font-semibold text-white duration-300 px-6 py-2 ml-8">ADD TO CART</button>
                  </div>
                  <Skeleton variant="text" animation="wave" />
                </div>
              </div>
            </div>
            <div className="container p-6 lg:pb-12 lg:px-24 bg-white">
              <div className="border-t-2 border-[#6e7051]">
                <h4 className="text-[#515151] lg:text-xl font-bold mt-2 mb-4">Description</h4>
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
                <h4 className="font-semibold text-[#212529] text-3xl xl:text-4xl my-6">Related Products</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16">
                  <Skeleton variant="rectangle" animation="wave" width={250} height={250} />
                  <Skeleton variant="rectangle" animation="wave" width={250} height={250} />
                  <Skeleton variant="rectangle" animation="wave" width={250} height={250} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container p-6 pb-0 lg:pt-12 lg:px-24 bg-white flex flex-col md:flex-row md:space-x-12 md:items-center">
              <div className="mb-8 lg:mb-0 lg:basis-2/4 lg:max-w-[500px] relative">
                <img className="w-full" src={product.main_image} alt="" />
                {product.promotion ? <span className="absolute flex justify-center items-center top-[-15px] right-[-15px] bg-[#6e7051] w-[50px] h-[50px] rounded-full text-white font-semibold">Sale!</span> : ""}
              </div>
              <div className="lg:basis-2/4">
                <p className="text-[#979a9b] mb-4 xl:text-lg">{`${product.inventory.category.category_name}, ${product.inventory.type.type}`}</p>
                <h3 className="text-[#212529] font-semibold text-3xl xl:text-5xl mb-4">{product.name}</h3>
                {product.promotion ? (
                  <div className="flex items-center space-x-3">
                    <p className="mb-4 text-3xl text-[#d3d2d2] line-through">{`${product.inventory.price} EGP`}</p>
                    <p className="text-[#979a9b] mb-4 text-3xl">{`${product.new_price} EGP`}</p>
                  </div>
                ) : (
                  <p className="text-[#979a9b] mb-4 text-3xl">{product.inventory.price} EGP</p>
                )}
                <p className="mb-4 text-lg font-semibold">{product.inventory.qty_in_stock} In Stock</p>
                <div>
                  <div className="flex mb-4">
                    <button onClick={decrease} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                      -
                    </button>
                    <span className="text-[#212529] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] flex justify-center items-center">{count}</span>
                    <button onClick={increase} className="text-[#979a9b] border-[1px] border-[#dddddd] text-lg w-[40px] h-[40px] block">
                      +
                    </button>
                    <button onClick={placeOrder} className="bg-[#6e7051] hover:bg-[#212529] font-semibold text-white duration-300 px-6 py-2 ml-8">ADD TO CART</button>
                  </div>
                </div>
                <p className="text-[#979a9b] lg:border-b-[1px] border-[#dddddd] pb-2 xl:text-lg">
                  Categories: <span>{`${product.inventory.category.category_name}, ${product.inventory.type.type}`}</span>
                </p>
              </div>
            </div>
            <div className="container p-6 lg:pb-12 lg:px-24 bg-white">
              <div className="border-t-2 border-[#6e7051]">
                <h4 className="text-[#515151] lg:text-xl font-bold mt-2 mb-4">Description</h4>
                <p className="text-[#979a9b] lg:text-lg mb-4">{product.description}</p>
                <h4 className="font-semibold text-[#212529] text-3xl xl:text-4xl my-6">Related Products</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16">
                  <Related relatedID={product.inventory.category.id} />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Product;
