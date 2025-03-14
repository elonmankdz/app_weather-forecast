/* eslint-disable no-undef */
module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module:react-native-dotenv",
				{
					moduleName: "@env",
					path: ".env",
					safe: false,
					allowUndefined: true,
				},
			],
			[
				"module-resolver",
				{
					root: ["./src"],
					alias: {
						"@": "./src",
					},
				},
			],
		],
	};
};
