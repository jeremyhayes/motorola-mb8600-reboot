#!/usr/bin/env node

const yargs = require('yargs');

const options = yargs
    .option('url', { default: 'https://192.168.100.1' })
    .option('s', { alias: 'ignore-ssl', default: false, type: 'boolean' })
    .option('u', { alias: 'username', default: 'admin' })
    .option('p', { alias: 'password', default: 'motorola' })
    .argv;

console.log(options);
