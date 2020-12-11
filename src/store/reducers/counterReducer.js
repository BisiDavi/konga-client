import * as actiontypes from "../actions/actiontypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actiontypes.INCREMENT_COUNT:
      return {
        counter: state.counter + payload.value
      };
    case actiontypes.DECREMENT_COUNT:
      return {
        counter: state.counter - payload.value
      };

    default:
      return state;
  }
};

export default counterReducer;
