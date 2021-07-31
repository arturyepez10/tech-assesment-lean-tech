FROM node:14

WORKDIR /base

COPY package.json /base/package.json
COPY package-lock.json /base/package-lock.json

RUN npm install

COPY . /base

EXPOSE 8080

CMD [ "npm", "start" ]