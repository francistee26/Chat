import React, { useState } from "react";

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem(socket.id)} is typing`);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const userInfo = {
      text: message,
      name: localStorage.getItem(socket.id),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    };
    if (message.trim() && localStorage.getItem(socket.id)) {
      socket.emit("message", userInfo);
    }
    setMessage("");
  };
  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="sendBtn">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
