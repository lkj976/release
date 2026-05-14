
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.js');
let code = fs.readFileSync(indexPath, 'utf8');

// 查找并替换 listen 调用
const originalListen = 'server.listen({port:process.env.DEV_HTTP_PORT||0,host:"127.0.0.1"})';
const newListen = 'server.listen({port:3000,host:"0.0.0.0"})';

if (code.includes(originalListen)) {
    code = code.replace(originalListen, newListen);
    fs.writeFileSync(indexPath, code);
    console.log('✅ 成功修改监听地址和端口为 0.0.0.0:3000');
} else {
    console.log('❌ 未找到原始 listen 调用');
    // 尝试正则替换
    const regex = /server\.listen\(\{port:.*?host:.*?\}\)/;
    if (regex.test(code)) {
        code = code.replace(regex, newListen);
        fs.writeFileSync(indexPath, code);
        console.log('✅ 通过正则成功修改监听地址和端口');
    }
}
