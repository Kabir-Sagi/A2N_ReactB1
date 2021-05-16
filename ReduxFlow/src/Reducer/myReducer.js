import InitialVal from "../InitialValue";

const myReducer = (state = InitialVal, action) => {
  switch (action.type) {
    case "USERS":
      state = {
        ...state,
        users: action.payload,
      };
      break;
    case "COMMENTS":
      state = {
        ...state,
        comments: action.payload,
      };
      break;
    case "POSTS":
      state = {
        ...state,
        posts: action.payload,
      };
      break;
  }
  return state;
};

export default myReducer;
