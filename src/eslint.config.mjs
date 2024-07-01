// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: [
      '**/pages/**/*.{js,ts,vue}',
      '**/layouts/**/*.{js,ts,vue}',
      '**/app.{js,ts,vue}',
      '**/error.{js,ts,vue}',
      '**/.*.js',
    ],
    rules: {
      'semi': 'error',
      'prefer-const': 'error',
    },
  },
)
