#!/usr/bin/env node
require('colors');
const yargs = require('yargs');
const path = require('path');
const serve = require('../index.js');

const { argv } = yargs;

const [root] = argv._;

const { port } = argv;

const resolvedPath = path.resolve(root || process.cwd());

const server = serve({
    root: resolvedPath,
    port: typeof port === 'undefined' ? 4000 : port,
});


const serverPort = server.address().port;

console.log(`Serving ${resolvedPath.blue} at ${`http://localhost:${serverPort}`.green}`);
