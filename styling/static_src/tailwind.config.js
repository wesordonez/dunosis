/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
	prefix: "",
	important: false,
	content: [
		/**
		 * HTML. Paths to Django template files that will contain Tailwind CSS classes.
		 */

		/*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
		"../templates/**/*.html",
		"../templates/**/*.{html,jsx, js}",

		/*
		 * Main templates directory of the project (BASE_DIR/templates).
		 * Adjust the following line to match your project structure.
		 */
		"../../templates/**/*.html",
		"../../templates/**/*.js",
		"../../templates/**/*.{html, jsx, js}",

		/*
		 * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
		 * Adjust the following line to match your project structure.
		 */
		"../../**/templates/**/*.html",
		"../../**/templates/**/*.js",
		"../../**/templates/**/*.{html, jsx, js}",

		/**
		 * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
		 * patterns match your project structure.
		 */
		/* JS 1: Ignore any JavaScript in node_modules folder. */
		// '!../../**/node_modules',
		/* JS 2: Process all JavaScript files in the project. */
		// '../../**/*.js',
		"../node_modules/flowbite/**/*.js",

		/**
		 * Python: If you use Tailwind CSS classes in Python, uncomment the following line
		 * and make sure the pattern below matches your project structure.
		 */
		// '../../**/*.py'
	],
	theme: {
		extend: {
			fontFamily: {
				custom: ["Noir Pro", "sans-serif"],
			},
			colors: {
				"bg-primary": "#f5f5f5",
				"du-red": "#C62A2C",
				"du-green": "#029A4D",
				"du-blue": "#4D40f0",
				"du-yellow": "#ECB731",
				"du-purple": "#68008A",
			},
		},
	},
	plugins: [
		require("flowbite/plugin"),
		/**
		 * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
		 * for forms. If you don't like it or have own styling for forms,
		 * comment the line below to disable '@tailwindcss/forms'.
		 */
		// require('@tailwindcss/forms'),
		// require('@tailwindcss/typography'),
		// require('@tailwindcss/aspect-ratio'),
	],
};
