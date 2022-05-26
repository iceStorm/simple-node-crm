# The first thing we need to do is define from what image we want to build from.
# Here we will use the latest LTS (long term support) version 16 of node available from the Docker Hub:
FROM node:16

# Next we create a directory to hold the application code inside the image,
# this will be the working directory for your application:
WORKDIR /urs/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "run start" ]
