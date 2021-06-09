import { destroyCookie, parseCookies as getCookie, setCookie } from 'nookies';

class CookieProvider {

	public get(name: string, ctx: any = null) {
		return getCookie(ctx)[name];
	}

	public set(name: string, value: any, options = {}, ctx: any = null) {
		setCookie(ctx, name, value, options);
	}

	public delete(name: string,  ctx: any = null) {
		destroyCookie(ctx, name);
	}
}

export default new CookieProvider();
