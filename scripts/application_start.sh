#!/bin/bash

echo 'run application_install.sh:' >>/home/ec2-user/SignalingServer/index.ts

echo 'pm2 restart index.ts' >>/home/ec2-user/SignalingServer/index.ts
pm2 restart index.ts >>/home/ec2-user/SignalingServer/index.ts
