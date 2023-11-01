import React, { useEffect, useRef } from "react";
import "./Options.css";
import classNames from "classnames";
import LoaderForOptions from "../Loaders/LoaderForOptions/LoaderForOptions";
import useObserver from "../../../Hooks/useObserver";

function Options({
  data = [],
  fetchFunc = () => {},
  isLoading = false,
  offset = null,
  showOptions = false,
  selectedOptionValue = "",
  highlightedOptionValue = "",
  select = () => {},
  highlight = () => {},
}) {
  const optionsNodes = useRef(new Map());

  const options = data.map((value) => {
    const classNameOption = classNames(
      "option",
      { selected: selectedOptionValue === value },
      { highlighted: highlightedOptionValue === value }
    );

    return (
      <li
        ref={(node) => {
          if (node) optionsNodes.current.set(value, node);
          else optionsNodes.current.delete(value);
        }}
        className={classNameOption}
        data-value={value}
        key={value}
        onClick={select}
        onMouseEnter={highlight}
      >
        {value}
      </li>
    );
  });

  const optionsList = useRef(null);
  const lastItem = useRef(null);

  useEffect(() => {
    if (showOptions && selectedOptionValue !== "") {
      optionsNodes.current.get(selectedOptionValue).scrollIntoView({
        block: "nearest",
      });
    } else {
      optionsList.current.scrollTo({ top: 0 });
    }
  }, [selectedOptionValue, showOptions]);

  useObserver(
    lastItem,
    offset !== null,
    isLoading,
    {
      root: optionsList.current,
      rootMargin: "0px 0px 600px 0px",
    },
    () => {
      fetchFunc();
    }
  );

  const classNameOptions = classNames("options", { show: showOptions });
  const classNameFirstOption = classNames(
    "option",
    { selected: selectedOptionValue === "" },
    { highlighted: highlightedOptionValue === "" }
  );

  return (
    <ul ref={optionsList} className={classNameOptions}>
      <li
        className={classNameFirstOption}
        data-value=""
        onClick={select}
        onMouseEnter={highlight}
      >
        ...
      </li>
      {options}
      {isLoading && <LoaderForOptions />}
      <li ref={lastItem}></li>
    </ul>
  );
}

export default Options;
