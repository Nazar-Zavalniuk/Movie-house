export function getPageCount(totalCount, limit) {
  return Math.ceil(totalCount / limit);
}

export function getArrayPages(currentPage, totalPages) {
  if (totalPages <= 1) {
    return [];
  }

  let startPage = 1;
  let endPage = Math.min(totalPages, 10);

  if (totalPages > 10 && currentPage > 6) {
    if (currentPage <= totalPages - 4) {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    } else {
      startPage = totalPages - 9;
      endPage = totalPages;
    }
  }

  return Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );
}
