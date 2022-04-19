import React, { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";
import ResidentContainer from "../Resident/ResidentContainer/ResidentContainer";
import LocationContainer from "../Location/LocationContainer/LocationContainer"


const query = Math.floor(Math.random() * 108) + 1;

const SearchBox = () => {
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/location/${query}`
  );
  const [search, setSearch] = useState("");
  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (
    <div className="d-block mx-auto text-center">
      <input
        className="text-center"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="type a location"
      />
      {search !== "" && (
        <div className="card text-white bg-primary mb-3">
        <h2>Search Results</h2>
      <div className="d-flex justify-content-center">
        <SearchResult
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />

</div> </div>
      )}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </div>
  );
};

export default SearchBox;