module.exports = {
	env: {
		API_VERSION: process.env.API_VERSION,
		BACKEND_HOST: process.env.BACKEND_HOST,
	},
	webpack: (config, { dev, isServer, webpack }) => {
		if (dev) {
			config.module.rules.push({
				test: /\.ts|\.tsx$/,
				exclude: /node_modules|\.accept\.ts/,
				loader: 'tslint-loader',
			});
		}
		config.module.rules.push({
			test: /\.svg$/,
			exclude: /node_modules/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	trailingSlash: true,
};
