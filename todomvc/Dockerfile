FROM node:10-alpine as node

WORKDIR /app

COPY package*.json /app/

# 安装依赖
RUN npm install

COPY . .

EXPOSE 8081

# 使用 npm 启动应用程序
CMD ["npm", "start"]
