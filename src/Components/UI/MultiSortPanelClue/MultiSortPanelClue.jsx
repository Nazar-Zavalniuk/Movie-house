import React from "react";
import "./MultiSortPanelClue.css";

function MultiSortPanelClue({ isFirstPageLoad, ...props }) {
  const clueText = isFirstPageLoad
    ? "Оберіть параметри для пошуку фільмів..."
    : "Вкажіть хоча б один параметр для пошуку";

  return (
    <div className="multi-sort-panel-clue">
      <div className="multi-sort-panel-clue-body">{clueText}</div>
    </div>
  );
}

export default MultiSortPanelClue;
