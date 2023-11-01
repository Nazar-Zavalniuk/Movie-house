import { useEffect, useRef } from "react";

function useObserver(ref, canLoad, isLoading, options, callback) {
  const observer = useRef(null);

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };
    observer.current = new IntersectionObserver(cb, options);
    observer.current.observe(ref.current);
  }, [isLoading]);
}

export default useObserver;
