FROM node:16.16.0
ENV TZ="Asia/Shanghai"
# ENV NODE_ENV=production

WORKDIR /app
COPY . .

# RUN npm ci --registry=https://registry.npm.taobao.org
# RUN apk update && apk add bash

ENTRYPOINT ["npm", "run", "start:prod"]
