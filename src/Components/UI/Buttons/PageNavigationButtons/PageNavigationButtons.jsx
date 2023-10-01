import React from "react";
import "./PageNavigationButtons.css";
import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import MainNavButtons from "../MainNavButtons/MainNavButtons";
import usePageNavigationButtons from "../../../../Hooks/usePageNavigationButtons";

function PageNavigationButtons({
  totalPages,
  scrollParams = ["top", 425, "smooth"],
  ...props
}) {
  const [
    currentPage,
    onPageChange,
    goToPreviousPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
  ] = usePageNavigationButtons(totalPages, scrollParams);

  return (
    <div className="page-navigation-buttons">
      {currentPage >= 7 && totalPages > 10 && (
        <FaAngleDoubleLeft
          onClick={goToFirstPage}
          size={15}
          className="go-to-first-page-btn"
          title="Повернутися на першу сторінку"
        />
      )}
      {currentPage > 1 && totalPages >= 3 && (
        <FaAngleLeft
          onClick={goToPreviousPage}
          size={15}
          className="go-to-previous-page-btn"
          title="Повернутися на попередню сторінку"
        />
      )}
      {currentPage >= 7 && totalPages > 10 && (
        <div className="decor-dots">...</div>
      )}
      <MainNavButtons
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        scrollParams={scrollParams}
      />
      {currentPage + 4 < totalPages && totalPages > 10 && (
        <div className="decor-dots">...</div>
      )}
      {currentPage !== totalPages && totalPages >= 3 && (
        <FaAngleRight
          onClick={goToNextPage}
          size={15}
          className="go-to-next-page-btn"
          title="Перейти на наступну сторінку"
        />
      )}
      {currentPage + 4 < totalPages && totalPages > 10 && (
        <FaAngleDoubleRight
          onClick={goToLastPage}
          size={15}
          className="go-to-last-page-btn"
          title="Перейти на останню сторінку"
        />
      )}
    </div>
  );
}

export default PageNavigationButtons;
