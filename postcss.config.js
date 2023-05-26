module.exports = {
	plugins: [
		require("autoprefixer"),
		require("postcss-preset-env")({
			stage: 1,
		}),
		require("precss"),
		require("postcss-import"),
		require("postcss-assets")({
			loadPaths: ["dist/img"],
		}),
		require("postcss-nested"),
		require("postcss-mixins"),
		require("cssnano")({
			preset: "default",
		}),
	],
};
