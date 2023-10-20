import React, {
  useLayoutEffect,
  useState,
  createContext,
  useContext,
  useCallback,
  useReducer,
} from "react";
import useFetchingActors from "../../Hooks/useFetchingActors";
import { offsetPagesReducer } from "./OffsetPagesReducer";
import { searchParamsReducer } from "./SearchParamsReducer";

const ContextApp = createContext(null);

export function AppStateProvider({ children, ...props }) {
  const [numReboots, setNumReboots] = useState(0);
  const [searchParams, dispatchSearchParams] = useReducer(searchParamsReducer, {
    pageSize: 12,
    fields: ["title", "year", "coverImage", "id", "rating"],
    sort: [{ field: "serialNumber", direction: "desc" }],
    offset: null,
    filterByFormula: null,
  });

  const [offsetPages, dispatchOffsetPages] = useReducer(offsetPagesReducer, [
    null,
  ]);

  const [searchInfo, setSearchInfo] = useState({
    sortByRating: false,
    info: "нове на сайті",
  });

  const [searchQueryValue, setSearchQueryValue] = useState("");

  const [fetchActors, actors, isActorsLoading, actorsError, setActorsError] =
    useFetchingActors();

  const clearActorsErrors = useCallback(() => {
    setActorsError({ errorState: false, errorMessage: "" });
  }, [setActorsError]);

  const [showAuthRatingModal, setShowAuthRatingModal] = useState(false);

  const [userName, setUserName] = useState(null);

  useLayoutEffect(() => {
    const userName = localStorage.getItem("userName");
    setUserName(userName);
  }, []);

  const [passwordChangeError, setPasswordChangeError] = useState(false);
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);

  const [isRatingSortUnavailable, setIsRatingSortUnavailable] = useState(false);
  const [showRatingSortWarning, setShowRatingSortWarning] = useState(false);

  const [appError, setAppError] = useState(null);

  return (
    <ContextApp.Provider
      value={{
        numReboots,
        setNumReboots,
        searchQueryValue,
        setSearchQueryValue,
        fetchActors,
        actors,
        isActorsLoading,
        actorsError,
        showAuthRatingModal,
        setShowAuthRatingModal,
        userName,
        setUserName,
        isPasswordUpdated,
        setIsPasswordUpdated,
        passwordChangeError,
        setPasswordChangeError,
        searchParams,
        dispatchSearchParams,
        searchInfo,
        setSearchInfo,
        isRatingSortUnavailable,
        setIsRatingSortUnavailable,
        showRatingSortWarning,
        setShowRatingSortWarning,
        appError,
        setAppError,
        clearActorsErrors,
        offsetPages,
        dispatchOffsetPages,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useAppState() {
  return useContext(ContextApp);
}
