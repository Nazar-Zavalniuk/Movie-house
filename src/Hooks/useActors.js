import { useState, useMemo } from "react";
import useFetching from "./useFetching";

function useActors(fetchFunc) {
  const [actors, setActors] = useState([]);
  const [fetchActors, isActorsLoad, actorsError] = useFetching(async () => {
    const actors = await fetchFunc();
    setActors(actors);
  });

  useMemo(() => {
    fetchActors();
  }, []);

  return [actors, isActorsLoad, actorsError];
}

export default useActors;
