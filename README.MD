# crop-web

## Description
This project is a web application that combines a frontend and a backend.

## Installation
To install the project, follow these steps:
1. Clone the repository.
2. Navigate to the `frontend` directory and run `pnpm install` to install frontend dependencies.
3. Navigate to the `backend` directory and run `pnpm install` to install backend dependencies.

## Usage
To run the project, use the following scripts:
- `pnpm frontend`: Runs the frontend development server.
- `pnpm backend`: Runs the backend development server.
- `pnpm install`: Installs frontend and backend dependencies.

# Database Management
To manage your database (dump or restore), you can use the following commands in the root directory:
- `cd backend`: Make sure your in the backend directory for the following to work

### Dump the database:
- `pnpm db dump local`: This command will generate a SQL dump file and automatically create TypeScript interfaces based on the dumped database schema. (requires .env.local)
- `pnpm db dump server`: This does the same as the above but with the server database (requires .env.server)

### Restore the database:
`pnpm db restore local` and `pnpm db restore server` : These command will restore the database from a SQL dump file.

## Technologies Used
- Frontend: React, React Router, Material-UI, Emotion, TensorFlow.js
- Backend: Express, MySQL, Clerk SDK, CORS, Dotenv


