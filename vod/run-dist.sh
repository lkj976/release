
#!/bin/bash
cd /workspace/vod

# 复制编译好的文件
cp dist/index.js index.js
cp dist/index.config.js index.config.js

# 设置环境变量
export REDIS_HOST=127.0.0.1
export REDIS_PORT=6379
export NODE_OPTIONS="--max-old-space-size=4096"

echo "Starting VodSpider..."
exec /workspace/node-v20.18.1-linux-x64/bin/node index.js

