import React, { useCallback } from "react";
import "./MainNavButtons.css";
import { v4 as uuidv4 } from "uuid";
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

  return pages.map((page) => (
    <span
      onClick={handlePageChange}
      className={
        page === currentPage ? "page-number current-page" : "page-number"
      }
      key={uuidv4()}
    >
      {page}
    </span>
  ));
}

export default MainNavButtons;
