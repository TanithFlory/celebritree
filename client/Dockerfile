FROM node:19.8.1-alpine as react_app
WORKDIR /app
COPY . /app/
RUN npm install --silent --production
# RUN npm install react-scripts@5.0.1 -g --silent
RUN npm run build

###########################################

# FROM nginx:1.23.4-alpine
# COPY --from=react_app /app/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

###########################################

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]