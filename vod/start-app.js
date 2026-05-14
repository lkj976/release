
const fs = require('fs');
const path = require('path');
const app = require('./index');

// Read config file
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Start application
app.start(config);
console.log('VodSpider server is running on http://0.0.0.0:3000');
