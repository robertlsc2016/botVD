#FROM debian:latest
FROM node:19.5.0
# RUN rm /bin/sh && ln -s /bin/bash /bin/sh
WORKDIR /app


COPY . .

COPY package*.json ./

RUN  apt-get install –y chromium-browser

# RUN apk add chromium-browser

RUN npm install

RUN npm run start

EXPOSE 10000

CMD [ "node", "index.js", "npm", "chromium-browser", "--no-sandbox" ]
