FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock /app/

# Install the dependencies
RUN yarn install

# Copy the rest of the application code
COPY . /app/

# Expose the port on which the server will run
EXPOSE 8001

# Set the command to run the server using nodemon
CMD ["yarn", "start"]