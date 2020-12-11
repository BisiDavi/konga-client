import * as actiontypes from "../actions/actiontypes";

const initialState = {
  products: []
};

const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actiontypes.FETCH_PRODUCTS:
      return {
        products: payload.products
      };

    default:
      return state;
  }
};

export default ProductReducer;
