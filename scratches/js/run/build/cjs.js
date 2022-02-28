const babel = require('rollup-plugin-babel')
const glob = require('glob')
const path = require('path')
const rollup = require('rollup')

const srcDir = './src'
const distDir = './dist/cjs'

async function build(inputOptions, outputOptions) {
  const bundle = await rollup.rollup(inputOptions)
  await bundle.write(outputOptions)
}

const entries = glob.sync('**/*.js', {
  ignore: ['**/_*.js'],
  cwd: srcDir
})

for (let entry of entries) {

  const inputOptions = {
    input: path.resolve(srcDir, entry),
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              ignoreBrowserslistConfig: true,
              targets: {
                node: 13
              }
            }
          ]
        ],
        plugins: [
          // TODO
          // ['@babel/plugin-proposal-class-properties', { 'loose': false }],
          // ['@babel/plugin-proposal-private-methods', { 'loose': false }],
          // ['@babel/plugin-transform-classes', { 'loose': false }]
        ]
      })
    ]
  }

  const outputOptions = {
    file: path.resolve(distDir, entry),
    format: 'cjs'
  }

  build(inputOptions, outputOptions)

}
