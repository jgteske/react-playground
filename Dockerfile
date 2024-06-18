# Use Node 16 alpine as parent image
FROM node:22.3.0-alpine

# Change the working directory on the Docker image to /app
WORKDIR /app

# Copy package.json and package-lock.json to the /app directory
COPY my-app/package.json my-app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of project files into this image
COPY my-app .

# Install dependencies
RUN npm run build

# Expose application port
EXPOSE 3000

# Start the application
CMD npm start
