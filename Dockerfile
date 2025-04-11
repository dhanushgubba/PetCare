# Use Node.js base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY server/package*.json ./

# Install dependencies
RUN npm install nodemon -g
RUN npm install cors
RUN npm install mongodb
RUN npm install express
RUN npm install react-router-dom
RUN npm install react
RUN npm install react-icons
RUN npm install multer

# Copy the rest of your server code
COPY server/ .

# Expose port (your backend runs on 5000)
EXPOSE 5000

# Start the server using nodemon
CMD ["nodemon", "backend.js"]
