import React, { useCallback, useState } from "react";
import "./FilterInfo.css";
import { BsStarFill } from "react-icons/bs";
import classNames from "classnames";

function FilterInfo(props) {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const classNameStar = classNames("filter-star", { active: isToggleOn });
  const starTitle = isToggleOn
    ? "Скасувати сортування"
    : "Cортувати за рейтингом";

  const handleToggle = useCallback(() => {
    setIsToggleOn(!isToggleOn);
  }, [setIsToggleOn, isToggleOn]);

  return (
    <div className="filter-info">
      <BsStarFill
        className={classNameStar}
        title={starTitle}
        size={16}
        onClick={handleToggle}
      />
      <div className="filter-text-block">
        <div className="decor-filter-line" />
        <div className="filter-text"></div>
      </div>
    </div>
  );
}

export default FilterInfo;
