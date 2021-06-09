import { SET_TEST } from './types';

export const setTest = (payload: number) => ({
	payload,
	type: SET_TEST,
});
