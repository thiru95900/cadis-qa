#!/bin/bash

echo 'run after_install.sh:' >> /home/ec2-user/SignalingServer/index.ts
echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/SignalingServer/index.ts
cd /home/ec2-user/SignalingServer >> /home/ec2-user/SignalingServer/index.ts

echo 'npm install' >> /home/ec2-user/SignalingServer/index.ts
npm install >> /home/ec2-user/SignalingServer/index.ts
