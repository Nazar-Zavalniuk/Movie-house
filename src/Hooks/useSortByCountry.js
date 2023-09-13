import { useCallback } from "react";
import { useAppState } from "../Context/AppStateProvider/AppStateProvider";
import { getSearchParams } from "../Utils/Sorting";

function useSortByCountry() {
  const { setSearchParams, setSearchInfo } = useAppState();

  const sortByCountry = useCallback(
    (country = "") => {
      setSearchParams(
        getSearchParams("year", "desc", 12, 1, ["country_like", country])
      );
      setSearchInfo({ sortByRating: false, info: `країна - ${country}` });
    },
    [setSearchInfo, setSearchParams]
  );

  return sortByCountry;
}

export default useSortByCountry;
