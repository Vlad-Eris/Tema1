import { defineConfig } from 'eslint/config';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig({
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: {
    prettier: eslintPluginPrettier,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-alert': 'error',
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 80 }],
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'eol-last': ['error', 'always'],
  },
});
