export const initialState = {
  user: null,
  details: {},
  userdoc: null,
  currclick: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_DETAILS":
      return {
        ...state,
        details: action.details,
      };

    case "SET_DOCTOR":
      return {
        ...state,
        userdoc: action.userdoc,
      };

    case "SET_CLICKID":
      return {
        ...state,
        currclick: action.id,
      };

    default:
      return state;
  }
};

export default reducer;
