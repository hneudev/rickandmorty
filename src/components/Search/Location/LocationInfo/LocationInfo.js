const LocationInfo = ({ name, type, dimension, population }) => {
    return (
      <div className="d-flex justify-content-center">
      <div className="card mb-3 w-50">
        <h2 className="card-header">{name}</h2>
        <div className="card-body">
          <div className="card-title">
            <b className="card-subtitle text-muted">Type: </b>
            {type}
          </div>
          <div className="card-title">
            <b className="card-subtitle text-muted">Dimension: </b>
            {dimension}
          </div>
          <div className="card-title">
            <b className="card-subtitle text-muted">Population </b>
            {population}
          </div>
      </div>
      </div>
      </div>
    );
  };
  
  export default LocationInfo;