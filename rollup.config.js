import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs   from '@rollup/plugin-commonjs'

const isWatch = process.env.ROLLUP_WATCH || false
const output  = process.env.OUTPUT
const input   = 'src/index.ts'
const config  = {
  input,
  external : [
    /node_modules/
  ]
}

// =============================================================================
// OUTPUT ESModule
//
if (output === 'es') {
  module.exports = Object.assign({}, config, {
    output : [
      { file : 'dist/bundle.es.js', sourcemap : !isWatch, format : output }
    ],
    plugins : [
      resolve(),
      typescript({
        sourceMap : !isWatch,
        tsconfig  : 'src/tsconfig.json'
      }),
      commonjs({extensions: ['.ts', '.js']})
    ]
  })
}
// =============================================================================
// OUTPUT CommonJS
//
if (output === 'cjs') {
  module.exports = Object.assign({}, config, {
    output : [
      { file : 'dist/bundle.cjs.js', sourcemap : !isWatch, exports : 'auto', format : output }
    ],
    plugins : [
      resolve(),
      typescript({
        tsconfig : 'src/tsconfig.json',
        // module   : 'CommonJS'
      }),
      commonjs({extensions: ['.ts', '.js']})
    ]
  })
}
