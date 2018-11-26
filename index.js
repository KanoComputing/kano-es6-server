const connect = require('connect');
const serveStatic = require('serve-static');

const namedResolutionMiddleware = require('./named-resolution-middleware');

module.exports = ({ root = process.cwd(), port = 4000 } = {}) => {
    return connect()
        .use(namedResolutionMiddleware())
        .use(serveStatic(root))
        .listen(port);
}
