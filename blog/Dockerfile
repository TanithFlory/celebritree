FROM node:18-alpine
WORKDIR /usr/share/nginx/blog
COPY package.json ./
RUN npm install --silent
COPY . ./
RUN npm run build
# RUN apk add --update darkhttpd
# CMD ["darkhttpd","/dist"]