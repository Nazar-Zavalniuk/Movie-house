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

export function sortByOption(callback, option, value) {
  let info;

  if (option === "year") {
    info = `рік - ${value}`;
  }
  if (option === "country") {
    info = `країна - ${value}`;
    option = "country_like";
  }
  if (option === "director") {
    info = `режисер - ${value}`;
    option = "director_like";
  }
  if (option === "actor") {
    info = `актор - ${value}`;
    option = "actors_like";
  }

  callback({
    prevParams: {
      [option]: value,
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info },
    params: {
      [option]: value,
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info },
  });
}

export function sortByRecommended(callback, type) {
  let info;

  if (type === "movie") {
    info = "рекомендовані фільми";
  }

  if (type === "tv-series") {
    info = "рекомендовані серіали";
  }

  callback({
    prevParams: {
      type,
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info },
    params: {
      type,
      _limit: 12,
      _page: 1,
      _sort: "views",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info },
  });
}

export function sortByNewOnSite(callback) {
  callback({
    prevParams: {
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    prevSortInfo: { sortByRating: false, info: "нове на сайті" },
    params: {
      _limit: 12,
      _page: 1,
      _sort: "id",
      _order: "desc",
    },
    sortInfo: { sortByRating: false, info: "нове на сайті" },
  });
}
