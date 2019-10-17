const nodeEnv = process.env.NODE_ENV
const isDevelopment = nodeEnv === 'development'

const { startServer } = require('minipac/server')

const port = 5983

startServer({
  allowSourceMaps: true,
  baseDir: 'dist',
  livereload: isDevelopment,
  getRootPath: () => Promise.resolve('index.html'),
  port,
})
  .then(() => {
    console.log(`Server running on port ${port}`)
  }, console.error)
