# Multi-stage
# Stage 1: Build Stage
FROM node:18-slim AS multistage1

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Stage 2: Production Stage
FROM node:18-alpine AS multistagefinal
# FROM multistage1 AS multistagefinal

WORKDIR /usr/src/app

# Copy only the essential files from the build stage
COPY --from=multistage1 /usr/src/app .

# Expose port
EXPOSE 3005

# Run the app
CMD ["node", "index.js"]
