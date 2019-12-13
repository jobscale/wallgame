FROM nginx:alpine
RUN apk --no-cache add bash
SHELL ["bash", "-c"]
WORKDIR /usr/share/nginx
COPY . html
CMD ["nginx", "-g", "daemon off;"]
