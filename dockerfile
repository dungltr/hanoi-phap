FROM node:lts-alpine
#FROM node:4-onbuild
#FROM node:lts-buster
# install simple http server for serving static content
RUN npm install -g http-server
# make the 'app' folder the current working directory
WORKDIR /home/ubuntu/frontend

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package.json ./
COPY package-lock.json ./

# install project dependencies
RUN npm install
#RUN npm install vue
#RUN npm install vue-cli
#RUN npm install cli-service
#RUN npm i @vue/cli-plugin-babel
RUN npm install vue-axios
RUN npm install axios
RUN npm install vuex
RUN npm install bootstrap-vue

COPY . .
EXPOSE 8080
#RUN npm run serve
RUN npm run build
CMD [ "http-server", "dist" ]
