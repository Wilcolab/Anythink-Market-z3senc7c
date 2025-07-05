# JavaScript Express Server

This project is a simple Express server that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. **Install dependencies**:
   This project uses Yarn as the package manager. Run the following command to install the necessary dependencies:
   ```
   yarn install
   ```

3. **Run the server**:
   Use the following command to start the server with Nodemon:
   ```
   yarn start
   ```

4. **Access the server**:
   Open your browser and navigate to `http://localhost:8001` to access the server.

## Docker

To run the server in a Docker container, you can build and run the Docker image using the following commands:

1. **Build the Docker image**:
   ```
   docker build -t js-express-server .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 js-express-server
   ```

## License

This project is licensed under the MIT License.