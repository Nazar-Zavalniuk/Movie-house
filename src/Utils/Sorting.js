export function sortByGenre(callback, genre) {
  callback({
    prevParams: {
      genre_like: genre,
      _limit: 12,
      _page: 1,
      _sort: "year,id",
      _order: "desc,desc",
    },
    prevSortInfo: { sortByRating: false, info: `жанр - ${genre}` },
    params: {
      genre_like: genre,
      _limit: 12,
      _page: 1,
      _sort: "year,id",
      _order: "desc,desc",
    },
    sortInfo: { sortByRating: false, info: `жанр - ${genre}` },
  });
}

export function sortByRating(callback, sortingParams) {
  const { params, sortInfo, prevParams, prevSortInfo } = sortingParams;

  if (sortInfo.sortByRating) {
    callback({
      prevParams,
      prevSortInfo,
      params: { ...prevParams },
      sortInfo: { ...prevSortInfo },
    });
  } else {
    callback({
      prevParams,
      prevSortInfo,
      params: { ...params, _sort: "rating", _order: "desc", _page: 1 },
      sortInfo: {
        sortByRating: true,
        info: `${sortInfo.info}, за рейтингом`,
      },
    });
  }
}

export function changePage(callback, sortingParams, page) {
  const { params, sortInfo, prevParams, prevSortInfo } = sortingParams;

  callback({
    prevParams,
    prevSortInfo,
    params: { ...params, _page: page },
    sortInfo,
  });
}

export function sortByRecommendedMovies(callback) {
  callback({
    prevParams: {
      movieType: "фільм",
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info: "рекомендовані фільми" },
    params: {
      movieType: "фільм",
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info: "рекомендовані фільми" },
  });

  return callback;
}

export function sortByRecommendedSeries(callback) {
  callback({
    prevParams: {
      movieType: "серіал",
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info: "рекомендовані серіали" },
    params: {
      movieType: "серіал",
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info: "рекомендовані серіали" },
  });

  return callback
};
