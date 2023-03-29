FROM node:10

WORKDIR /user/src/app

COPY ./ ./
#우리가 구현하고자하는 node_modules이 생성
RUN npm install 

CMD [ "node", "server.js"]