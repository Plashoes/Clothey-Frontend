import { useState, useEffect } from "react";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";

function Product() {
  useEffect(() => {
    document.title = `Clothy | ${product.name}`;
    window.scrollTo(0, 0);
  }, []);

  const [count, setCount] = useState(1);
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
  const product = {
    image: "/images/recycled-shoe-product-image-004.jpg",
    name: "Women’s Peach Training",
    price: "79.90",
    descriptionSmall: "Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.",
    descriptionBig: ["Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna pharetra cursus risus, lectus enim eget eu et lobortis faucibus.", "Eget odio justo ut scelerisque purus non aliquam adipiscing amet condimentum ligula diam erat sodales pharetra accumsan pellentesque at sem at eget ac hendrerit odio enim felis sit augue lorem egestas dictum vestibulum a etiam nisi, elit augue volutpat porta scelerisque nullam at leo faucibus cursus metus.", "Viverra nunc iaculis id sed diam nam quam id sapien pellentesque quam sed eu augue id ac tempus aliquam facilisis vivamus eget nisi id."],
    category: ["Women", "Running"],
  };

  const relatedProducts = [
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
    <>
      <Search />
      <div className="bg-[#f1f1ef] p-3 pt-0 lg:py-14 lg:pt-0  xl:px-32">
        <div className="container p-6 pb-0 lg:pt-12 lg:px-24 bg-white flex flex-col lg:flex-row lg:space-x-12 xl:items-center">
          <div className="mb-8 lg:mb-0 lg:basis-2/4 lg:max-w-[500px]">
            <img className="w-full" src={product.image} alt="" />
          </div>
          <div className="lg:basis-2/4">
            <p className="text-[#979a9b] mb-4 xl:text-lg">
              {product.category.map((category, index, arr) => {
                if (index === arr.length - 1) {
                  return category;
                } else {
                  return category + ", ";
                }
              })}
            </p>
            <h3 className="text-[#212529] font-semibold text-3xl xl:text-5xl mb-4">{product.name}</h3>
            <p className="text-[#979a9b] mb-4 text-3xl">${product.price}</p>
            <p className="text-[#979a9b] mb-4 lg:text-lg xl:text-xl">{product.descriptionSmall}</p>
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
            </div>
            <p className="text-[#979a9b] lg:border-b-[1px] border-[#dddddd] pb-2 xl:text-lg">
              Categories:{" "}
              <span>
                {product.category.map((category, index, arr) => {
                  if (index === arr.length - 1) {
                    return category;
                  } else {
                    return category + ", ";
                  }
                })}
              </span>
            </p>
          </div>
        </div>
        <div className="container p-6 lg:pb-12 lg:px-24 bg-white">
          <div className="border-t-2 border-[#6e7051]">
            <h4 className="text-[#515151] lg:text-xl font-bold mt-2 mb-4">Description</h4>
            {product.descriptionBig.map((desc, index) => {
              return (
                <p className="text-[#979a9b] lg:text-lg mb-4" key={index}>
                  {desc}
                </p>
              );
            })}
            <h4 className="font-semibold text-[#212529] text-3xl xl:text-4xl my-6">Related Products</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 ">
              {relatedProducts.map((cardInfo, index) => (
                <div key={index} className="card group border-2 border-[#e6e6e6] rounded-lg">
                  <a href="">
                    <div className="relative">
                      <img className="mb-4 w-full" src={cardInfo.imgURL} alt="" />
                      <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">Quick View</span>
                    </div>
                    <div className="text-center p-3">
                      <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-2">{cardInfo.name}</h5>
                      <p className="text-lg text-[#979a9b]">{`$${cardInfo.price}`}</p>
                    </div>
                  </a>
                </div>
              ))}
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

export default Product;
