import { Link } from "react-router-dom";

function ProductsGrid({ cardsInfo }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-16 ">
      {cardsInfo.map((cardInfo, index) => (
        <div key={index} className="card group border-2 border-[#e6e6e6] rounded-lg">
          <Link to="/product/1">
            <div className="relative">
              <img className="mb-4 w-full" src={cardInfo.imgURL} alt="" />
              <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">
                Quick View
              </span>
            </div>
            <div className="text-center p-3">
              <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-2">{cardInfo.name}</h5>
              <p className="text-lg text-[#979a9b]">{`$${cardInfo.price}`}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
