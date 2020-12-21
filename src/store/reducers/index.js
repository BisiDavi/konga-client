import { combineReducers } from "redux";

import { CounterReducer, ProductReducer} from "../../imports";

const createRootReducer = () =>  combineReducers({
  ctr: CounterReducer,
  ptr: ProductReducer,
})


export default createRootReducer;
