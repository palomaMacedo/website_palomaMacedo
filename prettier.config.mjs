/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],

  printWidth: 80,
  tabWidth: 2,
  useTabs: false,

  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,

  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  endOfLine: 'lf',
};

export default config;
