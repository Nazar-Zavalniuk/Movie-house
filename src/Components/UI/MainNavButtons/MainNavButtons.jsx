import React, { useCallback } from "react";
import "./MainNavButtons.css";
import { scroll } from "../../../API/Scroll";
import { getArrayPages } from "../../../Utils/Pages";

function MainNavButtons({
  totalPages,
  currentPage,
  onPageChange,
  scrollParams = ["top", 425, "smooth"],
  ...props
}) {
  const handlePageChange = useCallback(
    (e) => {
      const page = Number(e.target.textContent);

      if (currentPage !== page) {
        onPageChange(page);
        scroll(...scrollParams);
      }
    },
    [currentPage, onPageChange, scrollParams]
  );

  const pages = getArrayPages(currentPage, totalPages);

  return pages.map((page, index) => (
    <span
      onClick={handlePageChange}
      className={
        page === currentPage ? "page-number current-page" : "page-number"
      }
      key={index}
    >
      {page}
    </span>
  ));
}

export default MainNavButtons;
