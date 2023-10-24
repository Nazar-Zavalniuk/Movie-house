import { useState } from "react";
import MoviesService from "../API/MoviesService";
import useAdvancedFetching from "./useAdvancedFetching";

function useFetchingActors() {
  const [actors, setActors] = useState([]);
  const [fetchActors, isActorsLoading, actorsError, setActorsError] =
    useAdvancedFetching(async () => {
      const response = await MoviesService.getAllActors();
      const actors = response.data.records.map((record) => record.fields.actor);
      setActors(actors);
    });

  return [fetchActors, actors, isActorsLoading, actorsError, setActorsError];
}

export default useFetchingActors;
