import { useState } from "react";

function useFetching(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ errorState: false, errorMessage: "" });

  async function fetching() {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError({ errorState: true, errorMessage: e.message });
      console.error(e.message);
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
}

export default useFetching;
