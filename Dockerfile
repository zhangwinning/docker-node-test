FROM  node:12.16.3

# 设置工作目录，如果不存在将会被创建
WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

RUN npm install

COPY . /code

CMD ["node", "server.js"]