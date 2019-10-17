const pkg = require('./package.json')

const { version, name } = pkg
const releaseName = `${name}-${version}`

const nodeEnv = process.env.NODE_ENV
const isDevelopment = nodeEnv === 'development' || nodeEnv === 'prodBackend'

const minify = !isDevelopment
const global = {
  minifyDependencies: minify,
  minifyJS: minify,
  copy: [ {
    from: [ 'lib/favicon.ico' ],
    to: 'favicon.ico',
  } ],
}

const dependencies = [
  { name: 'react', require: minify ? 'umd/react.production.min.js' : 'umd/react.development.js' },
  { name: 'react-dom', require: minify ? 'umd/react-dom.production.min.js' : 'umd/react-dom.development.js' },
  { name: 'react-router-dom', require: minify ? 'umd/react-router-dom.min.js' : 'umd/react-router-dom.js' },
]

const mainScreen = {
  lessFiles: [ { entryPoint: 'lib/style.less', target: `${releaseName}.css` } ],
  jsEntryPoint: 'lib/main.jsx',
  externalDependencies: dependencies,
  jsOutFile: `${releaseName}-login.js`,
  watch: isDevelopment,
}

const screens = [ mainScreen ]

module.exports = { global, screens }
