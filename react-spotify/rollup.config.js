import json from '@rollup/plugin-json';

export default {
  input: 'src/main.jsx',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [json()]
};