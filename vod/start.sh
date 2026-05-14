#!/bin/bash
export REDIS_HOST=127.0.0.1
export REDIS_PORT=6379
export NODE_OPTIONS="--max-old-space-size=4096"
exec /workspace/node-v20.18.1-linux-x64/bin/node index.js 2>&1
