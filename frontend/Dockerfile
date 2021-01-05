FROM node:10-alpine as builder

WORKDIR /home/app

COPY package.json ./

RUN apk add bash && \
  npm install

COPY src/ ./src/

RUN npm run build

FROM nginx:alpine

COPY config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/app/dist/ /usr/share/nginx/html
