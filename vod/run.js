
// 简单的启动脚本
const fs = require('fs');
const path = require('path');

// 设置必要的环境变量
process.env.REDIS_HOST = '127.0.0.1';
process.env.REDIS_PORT = '6379';

// 读取配置文件
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// 引入应用并启动
const app = require('./index.js');
console.log('正在启动 VodSpider...');
app.start(config);

console.log('');
console.log('=================================');
console.log('VodSpider 已成功启动！');
console.log('访问地址: http://localhost:3000');
console.log('默认账号: vodspider');
console.log('默认密码: abc123');
console.log('=================================');
