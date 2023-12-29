import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Related({ relatedID }) {
  const [related, setRelated] = useState([]);
  const relatedURL = "https://clotheyapi-production.up.railway.app/products/filter?size=6&category_id=";

  useEffect(() => {
    const fetchRelated = async () => {
      axios.get(`${relatedURL + relatedID}`).then((res) => {
        setRelated(res.data);
      });
    };
    fetchRelated();
  }, []);
  return (
    <>
      {related.map((cardInfo, index) => {
        return (
          <div key={index} className="card group border-2 border-[#e6e6e6] rounded-lg">
            <Link to={`/product/${cardInfo.id}`} onClick={() => window.reload()}>
              <div className="relative">
                <img className="mb-4 mx-auto w-[150px] xl:w-[250px] h-[150px] xl:h-[250px] p-4" src={cardInfo.main_image} alt="" />
                <span className="absolute bottom-0 text-center text-xl block w-full py-1 text-white bg-[#212529] opacity-0 group-hover:opacity-100 duration-300">Quick View</span>
              </div>
              <div className="text-center p-3">
                <h5 className="text-[#212529] text-lg sm:text-xl font-bold mb-2">{cardInfo.name}</h5>
                <p className="text-lg text-[#979a9b]">{`$${cardInfo.inventory.price}`}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default Related;
