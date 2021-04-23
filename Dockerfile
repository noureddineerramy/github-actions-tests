

FROM node:14

WORKDIR /node-app

COPY /package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]