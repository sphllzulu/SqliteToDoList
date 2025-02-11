# Todo Application

A full-stack todo application built with React and Node.js, featuring a modern UI with styled-components and a SQLite database for persistence.

## Features

- Create new todo items
- Read existing todos
- Update todo text
- Delete todos
- Styled interface with modern design principles
- Persistent storage using SQLite

## Tech Stack

### Frontend
- React 18.3
- Vite
- styled-components
- axios for API communication
- ESLint for code quality

### Backend
- Node.js
- Express.js
- SQLite3
- CORS enabled for frontend communication

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-application
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm start
```
The server will start on http://localhost:5000

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```
The frontend will be available on http://localhost:5173

## Project Structure

```
todo-application/
├── backend/
│   ├── db.js           # Database configuration
│   ├── server.js       # Express server setup
│   └── package.json    # Backend dependencies
│
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── TodoApp.jsx # Main todo component
    │   └── main.jsx    # Application entry point
    ├── package.json    # Frontend dependencies
    └── vite.config.js  # Vite configuration
```

## API Endpoints

- `GET /todos` - Retrieve all todos
- `POST /todos` - Create a new todo
- `PUT /todos/:id` - Update a todo
- `DELETE /todos/:id` - Delete a todo

## Development

### Backend
The backend uses:
- `sqlite3` for database management
- `express` for API routing
- `cors` for handling cross-origin requests

### Frontend
The frontend is built with:
- React for UI components
- styled-components for styling
- axios for API requests
- Vite for development and building

## Building for Production

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. The built files will be in the `frontend/dist` directory

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
