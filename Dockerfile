FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install -g npm && npm i -g @nestjs/cli && npm install && npm run build
EXPOSE 3000
CMD npm run start:prod