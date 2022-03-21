FROM node:14-slim

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
# npm ci serait mieux ici

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]