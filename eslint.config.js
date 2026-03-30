import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  formatters: true,
}, {
  ignores: ['content/**/*.md'],
}, {
  files: ['**/*.vue', '**/*.ts'],
  rules: {
    'no-restricted-syntax': ['error', {
      selector: 'CallExpression[callee.name="useI18n"][arguments.length=0]',
      message: 'useI18n() must be called with { useScope: \'global\' } to avoid intlify SSR warnings.',
    }],
  },
})
