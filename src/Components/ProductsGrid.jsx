function ProductsGrid({ cardsInfo }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
      {cardsInfo.map((cardInfo, index) => (
        <div key={index} className="card group">
          <a href="">
            <div className="relative">
              <img className="mb-8" src={cardInfo.imgURL} alt="" />
              <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">
                Quick View
              </span>
            </div>
            <div className="text-center">
              <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-2">{cardInfo.name}</h5>
              <p className="text-lg text-[#979a9b]">{`$${cardInfo.price}`}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default ProductsGrid;
