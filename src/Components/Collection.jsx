import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import Search from "./Search";
import Features from "./Features";
import FeaturesSmall from "./FeaturesSmall";
import Footer from "./Footer";
import ProductsGrid from "./ProductsGrid";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function Collection() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [numberOfPages, setNumberOfPages] = useState();
  useEffect(() => {
    document.title = `Clothy | Collection`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setFetching(true);
    let currentURL = window.location.href;
    let decodedURL = decodeURIComponent(currentURL);
    let parts = decodedURL.split("/");
    const type = parts[parts.length - 1];
    let URL = `https://clotheyapi-production.up.railway.app/products/filter?page=${pageNumber}&size=12`;
    if (type == "men") {
      URL = `https://clotheyapi-production.up.railway.app/products/filter?type_id=1&page=${pageNumber}&size=12`;
      document.title = `Clothy | Men's Collection`;
    }
    if (type == "women") {
      URL = `https://clotheyapi-production.up.railway.app/products/filter?type_id=2&page=${pageNumber}&size=12`;
      document.title = `Clothy | Women's Collection`;
    }
    if (type == "unisex") {
      URL = `https://clotheyapi-production.up.railway.app/products/filter?type_id=3&page=${pageNumber}&size=12`;
      document.title = `Clothy | Unisex Collection`;
    }
    if (type == "children") {
      URL = `https://clotheyapi-production.up.railway.app/products/filter?type_id=4&page=${pageNumber}&size=12`;
      document.title = `Clothy | Children's Collection`;
    }
    const fetchProducts = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setProducts(res.data.products);
          setNumberOfPages(res.data.pages);
          setFetching(false);
        })
        .catch((e) => console.log(e));
    };
    fetchProducts();
  }, [pageNumber]);

  const changePage = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0, 0);
  }

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
  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue == "all") {
      navigate("/collection/all");
      location.reload();
      return;
    }
    if (selectedValue == "men") {
      navigate("/collection/men");
      location.reload();
      return;
    }
    if (selectedValue == "women") {
      navigate("/collection/women");
      location.reload();
      return;
    }
    if (selectedValue == "unisex") {
      navigate("/collection/unisex");
      location.reload();
      return;
    }
    if (selectedValue == "children") {
      navigate("/collection/children");
      location.reload();
      return;
    }
  };

  return (
    <>
      <Search />
      <div className="bg-[#f1f1ef] pb-6 px-3 md:px-8 md:pb-12">
        <div className="bg-white p-8">
          <h2 className="text-[#6e7051] text-3xl sm:text-4xl font-bold mb-6">Products</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center sm:justify-between mb-8">
            <span className="text-[#979a9b] lg:text-xl">Showing {products.length} results</span>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <select onChange={handleFilter} name="Sort Products" id="" className="border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[150px]">
                <option value="filter">Filter</option>
                <option value="all">All</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
                <option value="children">Children</option>
              </select>
              <select ref={select} onChange={handleSort} name="Sort Products" id="" className="border-2 border-[#e6e6e6] py-2 text-[#666] focus:outline-none sm:w-[150px]">
                <option defaultValue={true}>Order By</option>
                <option value="lth">Price Low To High</option>
                <option value="htl">Price High To Low</option>
              </select>
            </div>
          </div>
          {fetching ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
              <div>
                <Skeleton variant="rectangle" animation="wave" width="100%" height={250} />
                <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" />
              </div>
            </div>
          ) : (
            <ProductsGrid cardsInfo={products} />
          )}
          <div className="flex justify-center my-6 space-x-5">
            {/* <button className={pageNumber === 1 ? "text-[#cbcfd7] cursor-default font bold py-2 px-6 bg-[#f0f1f4] duration-300 rounded-3xl" : "text-white font bold py-2 px-6 bg-[#6e7051] hover:bg-[#212529] duration-300 rounded-3xl"} onClick={previousPage}>
              Previous
            </button>
            <button className={products.length < 12 ? "text-[#cbcfd7] cursor-default font bold py-2 px-6 bg-[#f0f1f4] duration-300 rounded-3xl" : "text-white font bold py-2 px-6 bg-[#6e7051] hover:bg-[#212529] duration-300 rounded-3xl"} onClick={products.length < 12 ? null : nextPage}>
              Next
            </button> */}
            <Stack spacing={2}>
              <Pagination page={pageNumber} onChange={changePage} count={numberOfPages} />
            </Stack>
          </div>
        </div>
      </div>
      <Features />
      <FeaturesSmall />
      <Footer />
    </>
  );
}

export default Collection;
