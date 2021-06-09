// from https://github.com/lukeed/clsx/blob/master/src/index.js

type TOptions = {
	[key: string]: boolean;
};

function toVal(mix: number|string|object) {
	let key: string;
	let k: number;
	let y: string;
	let str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k = 0; k < mix.length; k++) {
				if (mix[k]) {
					y = toVal(mix[k]);
					if (y) {
						if (str) {
							str += ' ';
						}
						str += y;
					}
				}
			}
		} else {
			for (key in mix) {
				if ((mix as TOptions)[key]) {
					if (str) str += ' ';
					str += key;
				}
			}
		}
	}

	return str;
}

export default function clsx(...args: any[]): string {
	let i = 0;
	let tmp: number | string | object;
	let x;
	let str = '';
	while (i < args.length) {
		tmp = args[i++];
		if (tmp) {
			x = toVal(tmp);
			if (x) {
				if (str) {
					str += ' ';
				}
				str += x;
			}
		}
	}
	return str;
}
