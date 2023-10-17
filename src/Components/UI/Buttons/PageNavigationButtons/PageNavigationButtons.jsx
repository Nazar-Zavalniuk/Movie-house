import React from "react";
import "./PageNavigationButtons.css";
import { FaAngleLeft, FaAngleDoubleLeft, FaAngleRight } from "react-icons/fa";
import usePageNavigationButtons from "../../../../Hooks/usePageNavigationButtons";
import { useAppState } from "../../../../Context/AppStateProvider/AppStateProvider";

function PageNavigationButtons({
  totalPages,
  scrollParams = ["top", 425, "smooth"],
  ...props
}) {
  const { offsetPages } = useAppState();
  const offsetNextPage = offsetPages[offsetPages.length - 1];

  const [goToPreviousPage, goToNextPage, goToFirstPage] =
    usePageNavigationButtons(scrollParams);

  return (
    <div className="page-navigation-buttons">
      {offsetPages.length >= 4 && (
        <FaAngleDoubleLeft
          onClick={goToFirstPage}
          size={15}
          className="go-to-first-page-btn"
          title="Повернутися на першу сторінку"
        />
      )}
      {offsetPages.length >= 3 && (
        <FaAngleLeft
          onClick={goToPreviousPage}
          size={15}
          className="go-to-previous-page-btn"
          title="Повернутися на попередню сторінку"
        />
      )}
      {offsetNextPage !== null && (
        <FaAngleRight
          onClick={goToNextPage}
          size={15}
          className="go-to-next-page-btn"
          title="Перейти на наступну сторінку"
        />
      )}
    </div>
  );
}

export default PageNavigationButtons;
