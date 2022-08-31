FROM node:16.16.0-alpine
ENV TZ="Asia/Shanghai"
ENV NODE_ENV=production

WORKDIR /app
# ADD dist/ . 
# COPY .env .
# COPY package*.json .
COPY . .

RUN npm ci --registry=https://registry.npm.taobao.org
# RUN apk update && apk add bash

ENTRYPOINT ["npm", "run", "start:prod"]
