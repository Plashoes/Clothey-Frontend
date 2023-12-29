import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if(searchTerm === "") {
      return;
    }
    navigate(`/search/${searchTerm}`);
    location.reload();
  };

  return (
    <div className="flex justify-center items-center py-4 bg-[#f1f1ef]">
      <input type="text" placeholder="Search Products..." className="bg-white p-2 focus:placeholder-transparent placeholder:duration-300 block w-[230px] focus:outline-none" onChange={(e) => setSearchTerm(e.target.value)} />
      <button className="bg-[#6e7051] hover:bg-[#212529] duration-300 px-4 py-2" onClick={handleSearch}>
        <i className="fa-solid fa-chevron-right text-white "></i>
      </button>
    </div>
  );
}

export default Search;
