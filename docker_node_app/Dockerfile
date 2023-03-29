FROM node:10
#이미지 안에서 어플리케이션 소스 코드를 갖고 있을 디렉토리를 생성
WORKDIR /user/src/app

COPY ./ ./
#npm install을 해야 node_module이 다 들어간다.
RUN npm install

CMD ["node" , "server.js"]