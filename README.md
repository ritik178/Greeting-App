
## Backend

The backend is built with Express and handles the greeting API.

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

The server will run on `http://localhost:5000`.

### API Endpoint

- `GET /api/greet?name={name}`: Returns a greeting message for the provided name.

## Frontend

The frontend is built with React and Vite.

### Setup

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

The app will run on `http://localhost:3000`.

### Linting

To Run the code, run:
```sh
npm run dev
```

### Building 
To build the project for production, run:
```sh
npm run build
```



### Usage
1. Start both the backend and frontend servers.
2. Open http://localhost:5173 in your browser.
3. Enter your name in the field and click "Get Greeting" to receive a personalized greeting message.


### Live Production Link
 
  https://greeting-frontend-nd4zmcheq-ritik178s-projects.vercel.app
  