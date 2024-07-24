# Building a Chat App with Socket.io and React

## Table of Contents
1. [Introduction](#introduction)
2. [Project Setup](#project-setup)
3. [Conclusion](#conclusion)

## Introduction
In this project, I leverage the real-time communication provided by Socket.io to create an open chat application that allows users to send and receive messages from several users on the application. I also learned how to detect the users who are online and when a user is typing.

## Project Setup

1. Navigate into the `client` folder via your terminal and create a new React.js project.
    ```
    cd client
    npx create-react-app ./
    ```

2. Install Socket.io client API and React Router inside client directory.
    ```
    npm install socket.io-client react-router-dom
    ```

3. Navigate into the `server` folder and create a `package.json` file.
    ```
    cd server
    npm init -y
    ```

4. Install Express.js, CORS, Nodemon, and Socket.io Server API.
    ```
    npm install express cors nodemon socket.io
    ```

5. Set up a simple Node.js server using Express.js.

6. Import the HTTP and the CORS library to allow data transfer between the client and the server domains.

7. Add Socket.io on server directory to the project to create a real-time connection.

8. Configure Nodemon on server directory by adding the start command to the list of the scripts in the `package.json` file.
9. set up `.env` file for client 
   ```
      PORT=3000
      REACT_APP_SERVER_URL=http://<PC IPAddress>:4000
    ```
10. set up `.env` file for server 
    ```
      PORT=4000
      CORS_ORIGIN=http://<PC IPAddress>:3000
    ```

11. Run the server with Nodemon.
    ```
    npm start
    ```

12. Open the `App.js` file in the `client` folder and connect the React app to the Socket.io server.
    
14. Display a message on the server console when a connection is made to the server

15. Start the React.js server.
    ```
    npm start
    ```

## Conclusion
A real-time chat application using Socket.io and React! I learned how to set up a Node.js server, connect a React app to a Socket.io server, send and receive messages, and fetch the list of active users. This project can be further expanded by adding features such as private messaging, message history, and user authentication. Happy coding!
