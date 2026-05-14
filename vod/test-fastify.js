
const fastify = require('fastify')()
console.log('Fastify version:', require('fastify/package.json').version)
console.log('Fastify instance methods:', Object.keys(fastify))
console.log('Has addHttpMethod?', 'addHttpMethod' in fastify)
console.log('Has addHttpMethods?', 'addHttpMethods' in fastify)
console.log('Has route?', 'route' in fastify)
