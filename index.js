const connect = require('connect');
const serveStatic = require('serve-static');

const namedResolutionMiddleware = require('./named-resolution-middleware');

module.exports = ({ root = process.cwd(), port = 4000, replacements = [] } = {}) => {
    return connect()
        .use(namedResolutionMiddleware({ root, replacements }))
        .use(serveStatic(root))
        .listen(port);
}
