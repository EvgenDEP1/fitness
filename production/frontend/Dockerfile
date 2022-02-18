FROM nginx:1.21.6-alpine

COPY ./build /var/www

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
