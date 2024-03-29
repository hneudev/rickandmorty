import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchResult = ({ url, handle }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {

    
    const promise = axios(url);
    promise.then((res) => setResults(res.data.results.slice(0, 7)));
    promise.catch(() => {});
  }, [url]);

  const resultsList = results.map((value) => (
    <button
      onClick={() => handle(value.url)}
      key={value.url.substring(41)}
    >
      {value.name}
    </button>
  ));

  return <div className="col-sm-2 col-form-label">{resultsList}</div>;
};

export default SearchResult;
