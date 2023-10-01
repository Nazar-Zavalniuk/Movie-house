export function getSearchParams(
  sortOptions,
  order,
  limit = 12,
  page = 1,
  ...filterOptions
) {
  const searchParams = {
    _sort: sortOptions ? sortOptions : null,
    _order: order ? order : null,
    _limit: limit,
    _page: page,
  };

  if (filterOptions) {
    filterOptions.forEach((option) => {
      const [optionName, optionValue] = option;
      searchParams[`${optionName}`] = optionValue;
    });
  }

  return searchParams;
}
