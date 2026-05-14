const config = require('./index.config');
const { start } = require('./dist/index.js');

console.log('Starting VodSpider...');
start(config);
