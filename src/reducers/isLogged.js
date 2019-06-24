const loggedReducer = (state = false, aciton) => {
  switch (aciton.type) {
    case "SIGN_IN":
      return !state;
      break;

    default:
      return state;
      break;
  }
};

export default loggedReducer;
