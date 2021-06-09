import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import redusers from '.';

export const initializeStore = (initialState = {}) => {
	return createStore(redusers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
