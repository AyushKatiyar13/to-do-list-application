# Todo List App

## Description

This project is a simple Todo List application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, and mark todos as completed.

## Features

- **Create Todos**: Users can add new todos with a title and description.
- **View Todos**: All todos are displayed in a list format.
- **Mark as Completed**: Users can mark a todo as completed.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

Follow the steps below to set up the project on your local machine.

### Prerequisites

- **Node.js** (version 14.x or higher)
- **MongoDB** (either local or cloud-based like MongoDB Atlas)

### Clone the Repository

```bash
git clone https://github.com/your-username/todo-list-app.git
cd todo-list-app
```

### Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB connection string:

   - In `db.js`, replace the existing MongoDB connection string with your own:

     ```javascript
     mongoose.connect("your-mongodb-connection-string");
     ```

4. Start the backend server:

    ```bash
    npm start
    ```

   The backend server will run on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```

   The frontend server will run on `http://localhost:5173` (or another port if specified).

## Usage

1. Open your browser and navigate to `http://localhost:5173` to use the Todo List App.
2. Create new todos, view the list of todos, and mark them as completed.

## File Structure

```plaintext
├── backend
│   ├── db.js                 # MongoDB connection and schema
│   ├── index.js              # Express server setup
│   └── types.js              # Validation schemas
├── frontend
│   ├── public/
│   ├── src/
│   │   ├── App.css           # Main CSS file
│   │   ├── App.jsx           # Main React component
│   │   ├── components/
│   │   │   ├── CreateTodo.jsx # Component to create a new todo
│   │   │   └── Todos.jsx      # Component to display todos
│   ├── index.html            # HTML template
│   ├── package.json          # Frontend dependencies
│   └── vite.config.js        # Vite configuration
```

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes.
4. Commit your changes:

    ```bash
    git commit -m 'Add some feature'
    ```

5. Push to the branch:

    ```bash
    git push origin feature-name
    ```

6. Submit a pull request.
