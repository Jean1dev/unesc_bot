FROM node:14-alpine

WORKDIR /usr/src/app

COPY bot-telegram/package.json /usr/src/app/
RUN npm install

COPY bot-telegram/ /usr/src/app

CMD [ "node", "index.js" ]
