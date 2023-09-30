import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback } from "react";
import { scroll } from "../Utils/Scroll";

function usePageNavigationButtons(totalPages, scrollParams) {
  const { searchParams, setSearchParams } = useAppState();
  const currentPage = searchParams["_page"];

  const onPageChange = useCallback(
    (page) => {
      setSearchParams({ ...searchParams, _page: page });
    },
    [setSearchParams, searchParams]
  );

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      scroll(...scrollParams);
    }
  }, [currentPage, onPageChange, scrollParams]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      scroll(...scrollParams);
    }
  }, [currentPage, totalPages, onPageChange, scrollParams]);

  const goToFirstPage = useCallback(() => {
    if (currentPage !== 1) {
      onPageChange(1);
      scroll(...scrollParams);
    }
  }, [currentPage, onPageChange, scrollParams]);

  const goToLastPage = useCallback(() => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
      scroll(...scrollParams);
    }
  }, [currentPage, totalPages, onPageChange, scrollParams]);

  return [
    currentPage,
    onPageChange,
    goToPreviousPage,
    goToNextPage,
    goToFirstPage,
    goToLastPage,
  ];
}

export default usePageNavigationButtons;
