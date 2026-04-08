import js from '@eslint/js'
import astroPlugin from 'eslint-plugin-astro'
import perfectionist from 'eslint-plugin-perfectionist'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
    },
  },
  {
    ignores: ['dist/', '.astro/', '.vercel/'],
  },
]
