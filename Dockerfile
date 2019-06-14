FROM node:latest

EXPOSE 3000

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

CMD [ "ng", "build", "--prod"]
CMD [ "node", "server.js"]
