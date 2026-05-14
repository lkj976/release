
const fs = require('fs');
const path = require('path');
const originalCode = fs.readFileSync(path.join(__dirname, 'index.js'), 'utf8');

// 在代码开头注入调试代理
const debugCode = `
// 调试代码
const originalFastify = require('fastify');
function debugFastify(...args) {
  const instance = originalFastify(...args);
  console.log('Fastify instance created! Methods:', Object.keys(instance).filter(k => !k.startsWith('_')).slice(0, 50));
  console.log('Has addHttpMethod?', 'addHttpMethod' in instance);
  console.log('addHttpMethod typeof:', typeof instance.addHttpMethod);
  
  // 代理访问属性，捕获 rs 的访问
  return new Proxy(instance, {
    get(target, prop) {
      console.log('Accessing fastify property:', JSON.stringify(prop));
      return target[prop];
    },
    set(target, prop, value) {
      console.log('Setting fastify property:', JSON.stringify(prop), 'to', typeof value);
      target[prop] = value;
      return true;
    }
  });
}
// 替换 require('fastify')
const Module = require('module');
const originalRequire = Module.prototype.require;
Module.prototype.require = function(req) {
  if (req === 'fastify') {
    return debugFastify;
  }
  return originalRequire.call(this, req);
};

// 运行原始代码
`;

const finalCode = debugCode + originalCode;
fs.writeFileSync(path.join(__dirname, 'debug-run.js'), finalCode, 'utf8');

console.log('Debug file created at', path.join(__dirname, 'debug-run.js'));
