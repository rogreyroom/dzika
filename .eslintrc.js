module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended'
    'eslint:recommended',
    'plugin:vue/recommended',
		// "wesbos"
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		// 'no-console': 2,
		// 'prettier/prettier': [
		// 	'warn',
			// {
			// 	htmlWhitespaceSensitivity: 'ignore',
			// 	semi: false,
			// 	trailingComma: 'es5',
			// 	singleQuote: true,
			// 	printWidth: 120,
			// 	tabWidth: 2
			// }
		// ],
		//   "vue/max-attributes-per-line": ["error", {
		//   "singleline": 1,
		//   "multiline": {
		//     "max": 1,
		//     "allowFirstLine": false
		//   }
		// }]
		// 'vue/max-attributes-per-line': [
		// 	2,
		// 	{
		// 		singleline: 20,
		// 		multiline: {
		// 			max: 1,
		// 			allowFirstLine: false
		// 		}
		// 	}
		// ],
		// 'vue/html-self-closing': [
		// 	'error',
		// 	{
		// 		html: {
		// 			void: 'never',
		// 			normal: 'never',
		// 			component: 'always'
		// 		},
		// 		svg: 'always',
		// 		math: 'always'
		// 	}
		// ]
		// 'vue/max-attributes-per-line':

		// 	{
		// 		'singleline': 1,
		// 		'multiline': {
		// 			'max': 0,
		// 			'allowFirstLine': false
		// 		}
		// 	}
	}
};
