const cluster = require('cluster')
require('./bundle-project')

if (cluster.isMaster) {
  require('./webserver')
}
