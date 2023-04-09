FROM node:18-alpine
WORKDIR /usr/share/nginx/client
COPY package.json ./
RUN npm install --silent --production
# RUN npm install react-scripts@5.0.1 -g --silent
COPY . ./
RUN npm run build
# RUN apk add --update darkhttpd
# CMD ["darkhttpd","/build"]
###########################################

# FROM nginx:1.23.4-alpine
# COPY --from=react_app /app/build /usr/share/nginx/client
# RUN rm /etc/nginx/conf.d/default.conf
# COPY ../nginx/nginx.conf /etc/nginx/conf.d/default.conf

###########################################

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]