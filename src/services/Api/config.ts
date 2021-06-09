import { BACKEND_HOST } from 'const';

export const urlAPI = {
	todos: (id: string = '') => `${BACKEND_HOST}/todos/${id}`,
};

export type urlAPIKeysType = keyof typeof urlAPI;
