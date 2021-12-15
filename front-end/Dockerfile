# Dockerfile for React client
FROM node:alpine

# Working directory be app
WORKDIR /usr/app

###  Installing dependencies
COPY package*.json ./
RUN yarn

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["yarn","start"]
