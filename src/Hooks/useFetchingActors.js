import { useState } from "react";
import MoviesService from "../API/MoviesService";
import useAdvancedFetching from "./useAdvancedFetching";

function useFetchingActors() {
  const [actors, setActors] = useState([]);
  const [fetchActors, isActorsLoading, actorsError, setActorsError] =
    useAdvancedFetching(async () => {
      const actors = await MoviesService.getAllActors();
      setActors(actors);
    });

  return [fetchActors, actors, isActorsLoading, actorsError, setActorsError];
}

export default useFetchingActors;
