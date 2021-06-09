import fetch from 'cross-fetch';
import { makeURIParams } from 'helpers';
import { urlAPI, urlAPIKeysType } from './config';

class Api {
	private entity;

	constructor(entity: urlAPIKeysType) {
		this.entity = entity;
	}

	public async post(data: any, pathVariables: string[] | number[] = []) {
		return fetch(this.getUrlAPI(this.entity, '', pathVariables), {
			body: JSON.stringify(data),
			headers: {
				Accept: 'application/json',
			},
			method: 'POST',
		}).then(async (dataJSON: any) => dataJSON.json());
	}

	public async get(query: object = {}, pathVariables: (string | number)[] = []) {
		const queryURI = makeURIParams(query);
		return fetch(this.getUrlAPI(this.entity, queryURI, pathVariables)).then(async (dataJSON: any) => dataJSON.json());
	}

	private getUrlAPI(key: urlAPIKeysType, queryURI: string = '', pathVariables: (number | string)[] = []) {
		const baseUrl = typeof urlAPI[key] === 'function' ? urlAPI[key](...pathVariables as any) : urlAPI[key];
		return baseUrl + (queryURI.toString() ? `?${encodeURI(queryURI)}` : '');
	}
}

export default Api;
