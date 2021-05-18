module.exports = {
	root: true,

	env: {
		node: true,
	},

	parserOptions: {
		parser: '@typescript-eslint/parser',
	},

	plugins: ['prettier'],

	rules: {
		'no-console': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'vue/component-name-in-template-casing': ['error', 'PascalCase'],
	},

	extends: [
		'plugin:react/vue3-essential',
		'eslint:recommended',
		'@react/typescript/recommended',
		'@react/prettier',
		'@react/prettier/@typescript-eslint',
	],
}
