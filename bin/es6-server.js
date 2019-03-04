#!/usr/bin/env node
const chalk = require('chalk');
const sywac = require('sywac');
const path = require('path');
const serve = require('../index.js');

sywac.positional('[root=./]', { paramsDesc: 'A directory to serve the files from', coerce: (p) => path.resolve(p) })
    .number('-p, --port <number>', { desc: 'Which port to listen to', defaultValue: 4000 })
    .help('-h, --help')
    .version('-v, --version')
    .parseAndExit()
    .then((argv) => {
        const { port, root } = argv;

        const server = serve({ root, port });

        server.on('listening', () => {
            const serverPort = server.address().port;
            console.log(`Serving ${chalk.blue(root)} at ${chalk.green(`http://localhost:${serverPort}`)}`);
        });
        server.on('error', (e) => {
            console.error(e.stack);
        });
    });

