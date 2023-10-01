import React, {
  useLayoutEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";
import useActors from "../../Hooks/useFetchingActors";

const ContextApp = createContext(null);

export function AppStateProvider({ children, ...props }) {
  const [numReboots, setNumReboots] = useState(0);
  const [searchParams, setSearchParams] = useState({
    _sort: "id",
    _order: "desc",
    _limit: 12,
    _page: 1,
  });

  const [searchInfo, setSearchInfo] = useState({
    sortByRating: false,
    info: "нове на сайті",
  });

  const [searchQueryValue, setSearchQueryValue] = useState("");

  const [fetchActors, actors, isActorsLoading, actorsError, setActorsError] =
    useActors();

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
        setSearchParams,
        searchInfo,
        setSearchInfo,
        isRatingSortUnavailable,
        setIsRatingSortUnavailable,
        showRatingSortWarning,
        setShowRatingSortWarning,
        appError,
        setAppError,
        clearActorsErrors,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

export function useAppState() {
  return useContext(ContextApp);
}
