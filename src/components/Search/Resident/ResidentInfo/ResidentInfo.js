import React, { useEffect, useState } from "react";
import axios from "axios";


const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});


  useEffect(() => {
    if(url){
      const promise = axios(url);
      promise.then((res) => {
        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        });
      });
    }
  }, [url, resident.status]);

  return (
    <div className="col-md-3 mx-auto">
      <div className="card text-white bg-primary mb-3">

        <div className="card-title">
        <h4>
            {resident.name}
      </h4>
            </div>
            <img src={resident.image} alt="" />
            <div>

            <ul className="list-group list-group-flush">
    <li className="list-group-item"><h6>Species</h6></li>
    <li className="list-group-item">{resident.species}</li>
    <li className="list-group-item"> <h6> Origin</h6></li>
    <li className="list-group-item">{resident.origin}</li>
    <li className="list-group-item"><h6>Status</h6></li>
    <li className="list-group-item">{resident.status}</li>
    <li className="list-group-item">Episodes were they appear</li>
    <li className="list-group-item">{resident.episodes}</li>
  </ul>
        </div>
      </div>
    </div>
  );
};

export default ResidentInfo;
