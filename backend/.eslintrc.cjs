module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'standard',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	overrides: [
		{
			files: ['*.ts'],
			rules: {
				'no-undef': 'off',
			},
		},
	],
	root: true,
};
