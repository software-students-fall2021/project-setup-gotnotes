#  Dockerfile for Node Express Backend
FROM node:alpine

# Create App Directory
WORKDIR /usr/app

# Install Dependencies
COPY package*.json ./
RUN npm install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 4000

CMD ["yarn","dev"]