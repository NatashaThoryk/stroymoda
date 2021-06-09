FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY typescipt-next-js-master .

RUN npm run test

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["/app/node_modules/next/dist/bin/next", "start"]
