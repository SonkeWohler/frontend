### --- stage 1
FROM node:lts-alpine AS node
WORKDIR src/app/
COPY package.json ./
RUN [ "npm", "install" ]
COPY . .
RUN [ "npm", "run", "build" ]

### --- stage 2
FROM nginx:alpine
COPY --from=node src/app/dist/front /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
