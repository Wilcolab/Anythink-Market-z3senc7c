# Python Server and JS Express Server

This project contains two servers: a FastAPI server implemented in Python and an Express server implemented in Node.js. Both provide routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: FastAPI server implementation with two routes for adding and retrieving tasks.
- `python-server/src/__init__.py`: Marks the `src` directory as a Python package.
- `python-server/requirements.txt`: Lists dependencies for the FastAPI server.
- `python-server/Dockerfile`: Builds a Docker image for the FastAPI server.
- `js-express-server/src/app.js`: Express server implementation with routes for adding and retrieving tasks.
- `js-express-server/package.json`: Lists dependencies for the Express server.
- `js-express-server/Dockerfile`: Builds a Docker image for the Express server.
- `docker-compose.yml`: Defines and runs multi-container Docker applications, including both servers.

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running:

  ```shell
  docker compose up
  ```

  This command builds the Docker images and starts the containers defined in `docker-compose.yml`.

- The FastAPI server will be available at port `8000`, and the Express server at port `8001`.

## API Routes

Both servers provide the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.
- `GET /tasks`: Retrieves the task list.

Refer to each server's source code for specific implementation details.
