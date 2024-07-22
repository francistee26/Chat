import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
// import socketIO from "socket.io-client";
import io from "socket.io-client";
import "./App.css";

// const socket = socketIO.connect(process.env.REACT_APP_SERVER_URL);

const socket = io(process.env.REACT_APP_SERVER_URL, {
  transports: ["websocket"],
  withCredentials: true, // If you need to send cookies or authentication
});

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
