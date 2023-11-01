import { useState } from "react";
import MoviesService from "../API/MoviesService";
import useAdvancedFetching from "./useAdvancedFetching";

function useFetchingActors(offset, setOffset) {
  const [actors, setActors] = useState([]);
  const [fetchActors, isActorsLoading, actorsError, setActorsError] =
    useAdvancedFetching(async () => {
      const response = await MoviesService.getAllActors(offset);
      const newActors = response.data.records.map(
        (record) => record.fields.actor
      );
      setActors([...actors, ...newActors]);

      if (response.data.offset) {
        setOffset(response.data.offset);
      } else {
        setOffset(null);
      }
    });

  return [fetchActors, actors, isActorsLoading, actorsError, setActorsError];
}

export default useFetchingActors;
