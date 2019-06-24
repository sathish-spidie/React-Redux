const counterReducer = (state = 0, aciton) => {
  switch (aciton.type) {
    case "INCREMENT":
      return state + 1; //eslint-disable-next-line
      break;

    case "DECREMENT":
      return state - 1; //eslint-disable-next-line
      break;

    default:
      return state; //eslint-disable-next-line
      break;
  }
};

export default counterReducer;
