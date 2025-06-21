# Build stage
FROM node:18-alpine as build

WORKDIR /app

# 安装 git（解决 npm install 依赖 git 报错）
RUN apk add --no-cache git

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
