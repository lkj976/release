
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.js');
let code = fs.readFileSync(indexPath, 'utf8');

// 精确匹配完整的原始 listen 调用
const original = 'server.listen({port:process.env.DEV_HTTP_PORT||0,host:"127.0.0.1"})';
const replacement = 'server.listen({port:3000,host:"0.0.0.0"})';

if (code.includes(original)) {
    code = code.replace(original, replacement);
    fs.writeFileSync(indexPath, code);
    console.log('✅ 成功修改监听地址和端口!');
} else {
    console.log('❌ 未找到原始代码!');
}
