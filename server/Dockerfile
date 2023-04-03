FROM node:19.8.1-alpine
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --silent
##RUN npm install fails, package json contains everything, above command works fine.
# RUN npm rebuild bcrypt --build-from-source
COPY . /usr/src/app/
EXPOSE 3001
CMD ["node","app"]