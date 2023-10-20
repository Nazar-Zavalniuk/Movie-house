/* eslint-disable default-case */
export function searchParamsReducer(state, action) {
  switch (action.type) {
    case "update_offset": {
      return {
        ...state,
        offset: action.offset,
      };
    }
    case "change_search_params": {
      return action.params;
    }
    case "change_sort_params": {
      return {
        ...state,
        sort: action.params,
        offset: null,
      };
    }
    case "reset": {
      return {
        pageSize: 12,
        fields: ["title", "year", "coverImage", "id", "rating"],
        sort: [{ field: "serialNumber", direction: "desc" }],
        offset: null,
        filterByFormula: null,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
