import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createRootReducer from './reducers';

const store = () => createStore(createRootReducer(), composeWithDevTools());

export default store;
