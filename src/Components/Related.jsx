import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Related({ relatedID }) {
  const [related, setRelated] = useState([]);
  const relatedURL = "https://clotheyapi-production.up.railway.app/products/filter?size=6&category_id=";

  useEffect(() => {
    const fetchRelated = async () => {
      axios.get(`${relatedURL + relatedID}`).then((res) => {
        setRelated(res.data.products);
      });
    };
    fetchRelated();
  }, []);
  return (
    <>
      {related.map((cardInfo, index) => {
        return (
          <div key={index} className="card group border-2 border-[#e6e6e6] rounded-lg relative">
            <Link to={`/product/${cardInfo.id}`} onClick={() => window.reload()}>
              <div className="relative">
                <img className="mb-4 mx-auto w-[150px] xl:w-[250px] h-[150px] xl:h-[250px] p-4" src={cardInfo.main_image} alt="" />
                <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">Quick View</span>
              </div>
              <div className="text-center p-3">
                <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-2">{cardInfo.name}</h5>
                {cardInfo.promotion ? (
                  <>
                    <div className="flex justify-center items-center space-x-3">
                      <p className="text-lg text-[#d3d2d2] line-through">{`${cardInfo.inventory.price} EGP`}</p>
                      <p className="text-lg text-[#979a9b]">{`${cardInfo.new_price} EGP`}</p>
                    </div>
                    <span className="absolute flex justify-center items-center top-[-15px] right-[-15px] bg-[#6e7051] w-[50px] h-[50px] rounded-full text-white font-semibold">Sale!</span>
                  </>
                ) : (
                  <p className="text-lg text-[#979a9b]">{`${cardInfo.inventory.price} EGP`}</p>
                )}
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Related;
