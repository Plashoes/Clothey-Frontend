import React, { useState, useEffect, useRef } from "react";
import Skeleton from "@mui/material/Skeleton";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import ProductsGrid from "./ProductsGrid";

function Collection() {
  const [cardsInfo, setCardsInfo] = useState([
    {
      imgURL: "/images/recycled-shoe-product-image-004-400x400.jpg",
      name: "Women's Orange Sneaker",
      price: "44.90",
    },
    {
      imgURL: "/images/recycled-shoe-product-image-009-400x400.jpg",
      name: "Women’s Tan Sneaker",
      price: "80.00",
    },
    {
      imgURL: "/images/recycled-shoe-product-image-011-400x400.jpg",
      name: "Women’s Peach Training",
      price: "57.90",
    },
    {
      imgURL: "/images/recycled-shoe-product-image-004-400x400.jpg",
      name: "Women's Orange Sneaker",
      price: "44.90",
    },
    {
      imgURL: "/images/recycled-shoe-product-image-009-400x400.jpg",
      name: "Women’s Tan Sneaker",
      price: "80.00",
    },
    {
      imgURL: "/images/recycled-shoe-product-image-011-400x400.jpg",
      name: "Women’s Peach Training",
      price: "57.90",
    },
  ]);

  const [fetching, setFetching] = useState(false);

  const select = useRef(null);

  useEffect(() => {
    let sortingOrder = select.current.value;
    let tempArray = [...cardsInfo];
    if (sortingOrder === "lth") {
      tempArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      tempArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setCardsInfo(tempArray);
  }, []);

  const handleSort = (e) => {
    let sortingOrder = e.target.value;
    let tempArray = [...cardsInfo];
    if (sortingOrder === "lth") {
      tempArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      tempArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    setCardsInfo(tempArray);
  };

  return (
    <>
      <Search />
      <div className="bg-[#f1f1ef] py-6 px-3 md:px-8 md:pb-12 md:pt-6">
        <div className="bg-white p-8">
          <h2 className="text-[#6e7051] text-3xl sm:text-4xl font-bold mb-6">Products</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center sm:justify-between mb-8">
            <span className="text-[#979a9b] lg:text-xl">Showing all {cardsInfo.length} results</span>
            <select ref={select} onChange={handleSort} name="Sort Products" id="" className="lg:text-xl border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[300px]">
              <option defaultValue={true} value="lth">
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
        <ProductsGrid cardsInfo={cardsInfo} />
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
