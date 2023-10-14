import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback, useState } from "react";
import { scroll } from "../Utils/Scroll";

function usePageNavigationButtons(scrollParams) {
  const { dispatchSearchParams, offsetPages, dispatchOffsetPages } =
    useAppState();
  const [currentPage, setCurrentPage] = useState(1);

  const goToFirstPage = useCallback(() => {
    setCurrentPage(1);
    dispatchOffsetPages({ type: "reset" });
    dispatchSearchParams({
      type: "update_offset",
      offset: null,
    });
    scroll(...scrollParams);
  }, [scrollParams, dispatchOffsetPages, dispatchSearchParams]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage === 2) {
      goToFirstPage();
    } else {
      setCurrentPage(currentPage - 1);
      const offsetPrevPage = offsetPages[offsetPages.length - 3];
      dispatchSearchParams({
        type: "update_offset",
        offset: offsetPrevPage,
      });
      dispatchOffsetPages({ type: "delete_last_offset" });
      scroll(...scrollParams);
    }
  }, [
    scrollParams,
    dispatchSearchParams,
    currentPage,
    offsetPages,
    goToFirstPage,
    dispatchOffsetPages,
  ]);

  const goToNextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
    const offsetNextPage = offsetPages[offsetPages.length - 1];
    dispatchSearchParams({
      type: "update_offset",
      offset: offsetNextPage,
    });
    scroll(...scrollParams);
  }, [scrollParams, dispatchSearchParams, currentPage, offsetPages]);

  return [currentPage, goToPreviousPage, goToNextPage, goToFirstPage];
}

export default usePageNavigationButtons;
