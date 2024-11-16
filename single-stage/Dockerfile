# Single-stage Dockerfile
FROM node:18 AS singlestage

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 7000

# Run the app
CMD ["node", "index.js"]
