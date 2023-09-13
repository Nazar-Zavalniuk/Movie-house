import { Link } from "react-router-dom";
import { Fragment } from "react";

function useLinks(str = "", sortFunc = () => {}) {
  if (typeof str !== "string") return undefined;

  const arrayOfStrings = str.split(", ");
  const lastElementIndex = arrayOfStrings.length - 1;

  const sort = (e) => sortFunc(e.target.textContent);

  const links = arrayOfStrings.map((str, index) => {
    if (index === lastElementIndex) {
      return (
        <Link to="/homepage" onClick={sort} key={index}>
          {str}
        </Link>
      );
    } else {
      return (
        // Add a comma and indent after the link.

        <Fragment key={index}>
          <Link to="/homepage" onClick={sort}>
            {str}
          </Link>
          ,{" "}
        </Fragment>
      );
    }
  });

  return links;
}

export default useLinks;
