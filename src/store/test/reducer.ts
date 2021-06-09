import { IAction } from '../types';
import {
	IState,
	SET_TEST,
} from './types';

const initialState: IState = {
	test: 0,
};

const reducer = (state: IState = initialState, action: IAction): IState => {
	switch (action.type) {
		case SET_TEST: {
			return {
				...state,
				test: action.payload,
			};
		}
		default:
			return state;
	}
};

export default reducer;
