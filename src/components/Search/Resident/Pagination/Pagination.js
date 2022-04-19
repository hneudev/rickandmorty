
const Pagination = ({ residentsPerPage, totalResidents, paginate, selected }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalResidents / residentsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center pagination">

          {pageNumbers.map((number) => (
              <button 
              key={number}
              onClick={() => paginate(number)}
              className={number === selected ? "selected" : ""}>
                {number}
              </button>
          ))}

    </div>
  );
};

export default Pagination;
