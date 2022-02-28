const babel = require('rollup-plugin-babel')
const glob = require('glob')
const path = require('path')
const rollup = require('rollup')

const srcDir = './src'
const distDir = './dist/iife'

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
                browsers: [
                  '>= 1%',
                  'last 2 major versions',
                  'unreleased versions',
                  'not dead'
                ]
              }
            }
          ],
          [
            '@babel/preset-flow'
          ]
        ],
        plugins: [
          // TODO
        ]
      })
    ]
  }

  const outputOptions = {
    file: path.resolve(distDir, entry),
    format: 'iife',
    name: '_',
    globals: '_'
  }

  build(inputOptions, outputOptions)

}
