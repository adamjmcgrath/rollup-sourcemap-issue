module.exports = {
  input: 'index.js',
  output: {
    file: 'out.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    require('rollup-plugin-babel')({
      presets: [['@babel/env']]
    }),
    require('rollup-plugin-terser').terser(),
  ]
};
