
// VodSpider 启动脚本
process.env.REDIS_HOST = '127.0.0.1';
process.env.REDIS_PORT = '6379';
process.env.DEV_HTTP_PORT = '3000';

const fs = require('fs');
const path = require('path');

// 读取配置文件
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// 引入并启动应用
const app = require('./index.js');

console.log('🚀 正在启动 VodSpider 服务...');
app.start(config);
console.log('✅ VodSpider 服务已启动!');
console.log('📍 访问地址: http://localhost:3000');
console.log('👤 默认账号: vodspider');
console.log('🔑 默认密码: abc123');
