import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Skeleton from "@mui/material/Skeleton";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import ProductsGrid from "./ProductsGrid";

import "react-toastify/dist/ReactToastify.css";

function Collection() {
  const URL = "https://clotheyapi-production.up.railway.app/products/search?query=";
  const [products, setProducts] = useState([]);


  useEffect(() => {
    document.title = `Clothy | Collection`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let currentURL = window.location.href;
    let decodedURL = decodeURIComponent(currentURL);
    let parts = decodedURL.split('/');
    const searchTerm = parts[parts.length-1];

    const fetchProducts = async () => {
      await axios.get(`${URL + searchTerm}`).then((res) => {
        console.log(res);
        setProducts(res.data.products);
        setFetching(false);
      }).catch((e) => {
        setFetching(false);
        toast.info("No Results Found");
      })
    }

    fetchProducts();
  }, [])

  const [fetching, setFetching] = useState(true);

  const select = useRef(null);

  useEffect(() => {
    let sortingOrder = select.current.value;
    let tempArray = [...products];
    if (sortingOrder === "lth") {
      tempArray.sort((a, b) => parseFloat(a.inventory.price) - parseFloat(b.inventory.price));
    } else {
      tempArray.sort((a, b) => parseFloat(b.inventory.price) - parseFloat(a.inventory.price));
    }
    setProducts(tempArray);
  }, []);

  const handleSort = (e) => {
    let sortingOrder = e.target.value;
    let tempArray = [...products];
    if (sortingOrder === "lth") {
      tempArray.sort((a, b) => parseFloat(a.inventory.price) - parseFloat(b.inventory.price));
    } else {
      tempArray.sort((a, b) => parseFloat(b.inventory.price) - parseFloat(a.inventory.price));
    }
    setProducts(tempArray);
  };

  return (
    <>
      <Search />
      <div className="bg-[#f1f1ef] pb-6 px-3 md:px-8 md:pb-12">
        <div className="bg-white p-8">
          <h2 className="text-[#6e7051] text-3xl sm:text-4xl font-bold mb-6">Products</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center sm:justify-between mb-8">
            <span className="text-[#979a9b] lg:text-xl">Showing {products.length} results</span>
            <select ref={select} onChange={handleSort} name="Sort Products" id="" className="border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[300px]">
              <option defaultValue={true}>Default</option>
              <option value="lth">
                Price Low To High
              </option>
              <option value="htl">Price High To Low</option>
            </select>
          </div>
          {fetching ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
          <div>
            <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
          </div>
        </div>
      ) : (
        <ProductsGrid cardsInfo={products} />
      )}
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Collection;
