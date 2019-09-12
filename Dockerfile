FROM nginx

COPY dist/graphdblp-gui /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

EXPOSE 80