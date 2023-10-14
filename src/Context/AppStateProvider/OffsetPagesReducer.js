/* eslint-disable default-case */
export function offsetPagesReducer(state, action) {
  switch (action.type) {
    case "added": {
      return [...state, action.offset];
    }
    case "delete_last_offset": {
      return state.slice(0, state.length - 1);
    }
    case "reset": {
      return [null];
    }
  }
  throw Error("Unknown action: " + action.type);
}
