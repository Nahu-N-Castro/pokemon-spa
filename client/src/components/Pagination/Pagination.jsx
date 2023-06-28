import style from "./Pagination.module.css";

// eslint-disable-next-line react/prop-types
const Pagination = ({ page, handlePageChange }) => {
  const totalPages = Math.ceil(1278 / 12);

  const handlePageClick = (newPage) => {
    if (newPage !== page) {
      handlePageChange(newPage);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];

    const maxButtons = 5;

    const middleButtonIndex = Math.floor(maxButtons / 2);

    let startPage = Math.max(1, page - middleButtonIndex);
    
    const endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    buttons.push(
      <button
        key="first"
        className={`${style["pagination-button"]} ${
          1 === page ? style.active : ""
        }`}
        onClick={() => handlePageClick(1)}
      >
        First
      </button>
    );

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`${style["pagination-button"]} ${
            i === page ? style.active : ""
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }

    buttons.push(
      <button
        key="last"
        className={`${style["pagination-button"]} ${
          totalPages === page ? style.active : ""
        }`}
        onClick={() => handlePageClick(totalPages)}
      >
        Last
      </button>
    );

    return buttons;
  };

  return (
    <div className={style.pagination}>
      <div className={style["pagination-page"]}>{renderPageButtons()}</div>
    </div>
  );
};

export default Pagination;
