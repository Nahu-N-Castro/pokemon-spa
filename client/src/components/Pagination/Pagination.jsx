/* eslint-disable react/prop-types */
import style from "./Pagination.module.css";

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

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`${style["pagination-button"]} ${
            i === page ? style.active : ""
          }`}
          onClick={() => handlePageClick(i)}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className={style.pagination}>
      <div className={style["pagination-page"]}>{renderPageButtons()}</div>
    </div>
  );
};

export default Pagination;
