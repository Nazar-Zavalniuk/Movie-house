import React, { useState, useCallback, useEffect } from "react";
import "./Select.css";
import classNames from "classnames";
import Options from "../Options/Options";
import { useAppState } from "../../../Context/AppStateProvider/AppStateProvider";
import { RxCross1 } from "react-icons/rx";

function Select({
  data,
  fetchFunc,
  isLoading,
  offset,
  onChange = () => {},
  className,
  label = "",
  isSelectForMultiSelector = false,
}) {
  const [expanded, setExpanded] = useState(false);
  const toggleListVisibility = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  const collapseSelect = useCallback(() => {
    setExpanded(false);
  }, []);

  const [currentLabel, setCurrentLabel] = useState(label);
  const [selectedOptionValue, setSelectedOptionValue] = useState("");
  const select = useCallback(
    (e) => {
      e.stopPropagation();
      const value = e.target.dataset.value;

      if (selectedOptionValue === value) {
        collapseSelect();
        return;
      }
      if (isSelectForMultiSelector) {
        if (value === "") setCurrentLabel(label);
        else setCurrentLabel(value);
      }

      setSelectedOptionValue(value);
      onChange(value);
      collapseSelect();
    },
    [
      collapseSelect,
      isSelectForMultiSelector,
      label,
      onChange,
      selectedOptionValue,
    ]
  );

  const [highlightedOptionValue, setHighlightedOptionValue] = useState("");
  const highlight = useCallback(
    (e) => setHighlightedOptionValue(e.target.dataset.value),
    []
  );

  const clearSelect = useCallback(
    (e) => {
      e.stopPropagation();
      setSelectedOptionValue("");
      setHighlightedOptionValue("");
      setCurrentLabel(label);
      onChange("");
    },
    [label, onChange]
  );

  useEffect(() => {
    if (expanded) setHighlightedOptionValue("");
  }, [expanded]);

  const { searchInfo } = useAppState();
  const { info } = searchInfo;

  useEffect(() => {
    const resetSelectedOptionValue =
      !info.includes(selectedOptionValue) && !isSelectForMultiSelector;

    if (resetSelectedOptionValue) setSelectedOptionValue("");
  }, [info, isSelectForMultiSelector, selectedOptionValue]);

  const classNameSelect = classNames(
    "select",
    {
      "select-for-multi-selector": isSelectForMultiSelector,
    },
    className
  );

  return (
    <div
      className={classNameSelect}
      tabIndex={-1}
      onClick={toggleListVisibility}
      onBlur={collapseSelect}
    >
      <span className="select-label">{currentLabel}</span>
      {isSelectForMultiSelector && (
        <div
          className="clear-btn"
          title="Очистити фільтр"
          onClick={clearSelect}
        >
          <RxCross1 size={12} />
        </div>
      )}
      <Options
        data={data}
        fetchFunc={fetchFunc}
        isLoading={isLoading}
        offset={offset}
        showOptions={expanded}
        selectedOptionValue={selectedOptionValue}
        highlightedOptionValue={highlightedOptionValue}
        select={select}
        highlight={highlight}
      />
    </div>
  );
}

export default Select;
