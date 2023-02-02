FROM node:18-slim

WORKDIR /usr/src/app
COPY . ./

RUN yarn install


CMD ["yarn", "start"]