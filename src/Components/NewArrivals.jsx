import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import Skeleton from "@mui/material/Skeleton";

function NewArrivals() {
  const [fetching, setFetching] = useState(false);

  const cardsInfo = [
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
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-[#212529] text-3xl my-3">New Arrivals</h3>
        <button className="font-semibold text-[#212529] pb-1 hover:border-[#262b2c] duration-300 border-b-2 border-[#f6aa28]">VIEW ALL PRODUCTS</button>
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
  );
}
export default NewArrivals;
