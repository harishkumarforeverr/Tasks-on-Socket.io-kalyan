import "./App.css";

import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

// no dotenv
const socket = io.connect("http://localhost:5000");

function App() {
  const [message, setmessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChatAll = (e) => {
    e.preventDefault();
    socket.emit("userAll", message);
    setmessage("");
  };

  useEffect(() => {
    socket.on("userAll", (payload) => {
      console.log("payload", payload);
      setChat((prev) => [
        ...prev,
        {
          message: payload.message,
        },
      ]);
    });
  }, [socket]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Charting app</h1>

        {chat.map((payload, index) => {
          return (
            <p
              style={{
                position: "relative",
                
              }}
              key={index}
              className="chartInbox"
            >
              {payload.message}{" "}
              {index % 2 == 0 ? (
                <span className="userid"> fronted</span>
              ) : (
                <span className="userid"> backend</span>
              )}
            </p>
          );
        })}

        <form onSubmit={sendChatAll}> 
          <input
            type="text"
            name="chat"
            placeholder="send text"
            value={message}
            onChange={(e) => {
              setmessage(e.target.value);
            }}
          />
          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
