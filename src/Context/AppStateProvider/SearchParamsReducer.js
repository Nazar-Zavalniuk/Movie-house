/* eslint-disable default-case */
export function searchParamsReducer(state, action) {
  switch (action.type) {
    case "update_offset": {
      return {
        ...state,
        offset: action.offset,
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}
