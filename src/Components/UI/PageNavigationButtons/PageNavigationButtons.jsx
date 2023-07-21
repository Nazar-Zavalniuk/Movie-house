import React, { useCallback } from "react";
import "./PageNavigationButtons.css";
import {
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import MainNavButtons from "../MainNavButtons/MainNavButtons";
import { scroll } from "../../../API/Scroll";
import useAppState from "../../../Context/Hook/useAppState";
import { changePage } from "../../../Utils/Sorting";

function PageNavigationButtons({
  scrollParams = ["top", 425, "smooth"],
  ...props
}) {
  const { totalPages, sortingParams, setSortingParams } = useAppState();
  const currentPage = sortingParams.params["_page"];

  const onPageChange = useCallback(
    (page) => {
      changePage(setSortingParams, sortingParams, page);
    },
    [setSortingParams, sortingParams]
  );

  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scroll(...scrollParams);
    }
  }, [currentPage, onPageChange, scrollParams]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scroll(...scrollParams);
    }
  }, [currentPage, totalPages, onPageChange, scrollParams]);

  const handleFirstPage = useCallback(() => {
    if (currentPage !== 1) {
      onPageChange(1);
      scroll(...scrollParams);
    }
  }, [currentPage, onPageChange, scrollParams]);

  const handleLastPage = useCallback(() => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
      scroll(...scrollParams);
    }
  }, [currentPage, totalPages, onPageChange, scrollParams]);

  return (
    <div className="page-navigation-buttons">
      {currentPage >= 7 && totalPages > 10 && (
        <FaAngleDoubleLeft
          onClick={handleFirstPage}
          size={15}
          className="additional-buttons"
          title="Повернутися на першу сторінку"
        />
      )}
      {currentPage > 1 && totalPages >= 3 && (
        <FaAngleLeft
          onClick={handlePreviousPage}
          size={15}
          className="additional-buttons"
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
          onClick={handleNextPage}
          size={15}
          className="additional-buttons"
          title="Перейти на наступну сторінку"
        />
      )}
      {currentPage + 4 < totalPages && totalPages > 10 && (
        <FaAngleDoubleRight
          onClick={handleLastPage}
          size={15}
          className="additional-buttons"
          title="Перейти на останню сторінку"
        />
      )}
    </div>
  );
}

export default PageNavigationButtons;
