#!/usr/bin/env node

import yargs from 'yargs';
import { HnapClient } from 'motorola-mb8600-client/client.js';

const options = yargs(process.argv)
    .option('url', { default: 'http://192.168.100.1' })
    .option('s', { alias: 'ignore-ssl', default: false, type: 'boolean' })
    .option('u', { alias: 'username', default: 'admin' })
    .option('p', { alias: 'password', default: 'motorola' })
    .argv;

const client = new HnapClient(options.url, options.ignoreSsl);

(async () => {
    const loginResult = await client.login(options.username, options.password);
    console.log(loginResult);

    const connectionInfoResult = await client.getConnectionInfo();
    console.log(connectionInfoResult);
})();
