FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json .
COPY pnpm-lock.yaml .
COPY .npmrc .

RUN npm i -g pnpm
RUN pnpm i

COPY tsconfig.json .
COPY src ./src
COPY public ./public
COPY *.config.* .

CMD npm start

