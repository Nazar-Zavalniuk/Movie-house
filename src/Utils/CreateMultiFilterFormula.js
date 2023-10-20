export const createMultiFilterFormula = (filterOptions) => {
  const onlySelectedOptions = filterOptions.filter(
    (option) => option.value !== ""
  );

  const filterFormulas = onlySelectedOptions.map((option) => {
    if (option.field === "year") {
      return `IF(year = ${option.value}, 1, BLANK())`;
    } else {
      return `SEARCH(LOWER("${option.value}"), LOWER(${option.field}))`;
    }
  });

  const multiFilterFormula =
    filterFormulas.length > 1
      ? `AND(${filterFormulas.join(",")})`
      : filterFormulas.join("");

  return multiFilterFormula;
};
