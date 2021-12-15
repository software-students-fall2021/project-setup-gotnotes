# Stage 1
FROM node:alpine as build-stage

WORKDIR /usr/app
COPY package*.json ./
RUN npm install 
COPY . .

RUN npm run build

# Stage 2
FROM nginx:alpine

COPY --from=build-stage /usr/app/build /usr/share/nginx/html
EXPOSE 80

CMD nginx -g 'daemon off;'