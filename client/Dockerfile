FROM node:16-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install

COPY ./ ./
RUN yarn build

FROM nginx
EXPOSE 3000
#우리가 작성한 nginx설정으로 바꾸기
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
