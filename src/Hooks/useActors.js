import { useState, useMemo } from "react";
import useFetching from "./useFetching";

function useActors(fetchFunc, dependency) {
  const [actors, setActors] = useState([]);
  const [fetchActors, isActorsLoading, actorsError] = useFetching(async () => {
    const actors = await fetchFunc();
    setActors(actors);
  });

  useMemo(() => {
    fetchActors();
  }, [dependency]);

  return [actors, isActorsLoading, actorsError];
}

export default useActors;
