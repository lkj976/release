#!/bin/bash
export REDIS_HOST=127.0.0.1
export REDIS_PORT=6379
export DEV_HTTP_PORT=3000
exec /workspace/node-v20.18.1-linux-x64/bin/node index.js
