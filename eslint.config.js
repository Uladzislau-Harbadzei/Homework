import js from '@eslint/js';
import globals from 'globals';
import html from 'eslint-plugin-html';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.vscode/**'],
  },
  {
    files: ['**/*.js', '**/*.html'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
    },
    plugins: { html },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
