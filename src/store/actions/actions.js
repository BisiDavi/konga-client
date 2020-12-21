import * as actiontypes from './actiontypes';

export const IncrementCounter = () => {
  return {
    type: actiontypes.INCREMENT_COUNT,
    payload: {
      value: 1
    }
  };
};

export const DecrementCounter = () => {
  return {
    type: actiontypes.DECREMENT_COUNT,
    payload: {
      value: 1
    }
  };
};
