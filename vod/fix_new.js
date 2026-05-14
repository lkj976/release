const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index_new.js');
let code = fs.readFileSync(indexPath, 'utf8');

const original = 'server.listen({port:process.env.DEV_HTTP_PORT||0,host:"127.0.0.1"})';
const replacement = 'server.listen({port:3000,host:"0.0.0.0"})';

if (code.includes(original)) {
    code = code.replace(original, replacement);
    fs.writeFileSync(indexPath, code);
    console.log('✅ 修改监听地址和端口成功!');
} else {
    console.log('❌ 未找到原始代码');
}
