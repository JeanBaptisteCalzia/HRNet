import "../../components/Pagination/pagination.scss";

function Pagination({ nbPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nbPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nbPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  console.log(pageNumbers);
  return (
    <nav>
      <ul className="pagination">
        <li className="pagination__item">
          <a
            className={`pagination__link ${
              currentPage == 1 ? "disabled" : ""
            } `}
            onClick={() => {
              if (currentPage == 0) {
                return;
              }
              if (currentPage > 1) {
                goToPrevPage();
              }
            }}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`pagination__item ${
              currentPage == pgNumber ? "active" : ""
            } `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="pagination__link"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="pagination__item">
          <a
            className={`pagination__link ${
              currentPage == nbPages ? "disabled" : ""
            } `}
            onClick={() => {
              if (currentPage == nbPages) {
                return;
              }
              if (currentPage < nbPages) {
                goToNextPage();
              }
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
