import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { useCallback } from "react";
import { scroll } from "../Utils/Scroll";

function usePageNavigationButtons(scrollParams) {
  const { dispatchSearchParams, offsetPages, dispatchOffsetPages } =
    useAppState();

  const goToFirstPage = useCallback(() => {
    dispatchOffsetPages({ type: "reset" });
    dispatchSearchParams({
      type: "update_offset",
      offset: null,
    });
    scroll(...scrollParams);
  }, [scrollParams, dispatchOffsetPages, dispatchSearchParams]);

  const goToPreviousPage = useCallback(() => {
    if (offsetPages.length === 3) {
      goToFirstPage();
    } else {
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
    offsetPages,
    goToFirstPage,
    dispatchOffsetPages,
  ]);

  const goToNextPage = useCallback(() => {
    const offsetNextPage = offsetPages[offsetPages.length - 1];
    dispatchSearchParams({
      type: "update_offset",
      offset: offsetNextPage,
    });
    scroll(...scrollParams);
  }, [scrollParams, dispatchSearchParams, offsetPages]);

  return [goToPreviousPage, goToNextPage, goToFirstPage];
}

export default usePageNavigationButtons;
