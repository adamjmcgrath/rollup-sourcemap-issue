module.exports = {
  input: 'index.js',
  output: {
    file: 'out.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    require('rollup-plugin-terser').terser(),
    require('rollup-plugin-babel').generated({
      presets: [['@babel/env']]
    }),
  ]
};
