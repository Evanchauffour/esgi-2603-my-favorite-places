FROM node:25.8.0-alpine3.23

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY tsconfig.json tsconfig.json

COPY src src

RUN npm run build

CMD ["npm", "start"]