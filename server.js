// server.js
const egg = require('egg');
const workers = process.env.WORKERS || 2;

egg.startCluster({
    workers,
    baseDir: __dirname,
    port: process.env.PORT,
    env: process.env.NODE_ENV
});