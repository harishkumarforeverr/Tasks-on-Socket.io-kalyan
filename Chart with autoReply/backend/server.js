const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
const chart = {
  hi: "hi",
  ok: "ok",
  bye: "bye",
  "how are you": "im goood, what about you",
  "what are you": "nothing, what about you",
  "good morning": "good morning",
  "good afternoon": "good afternoon",
  "good evening": "good evening",
  "where are you going": "home",
  
};
io.on("connection", (socket) => {
  // emeiting the emt to all the user
  socket.on("userAll", (payload) => {
    console.log(payload);
    io.emit("userAll", { message: payload });
    io.emit("userAll", { message: chart[payload] ?? "No answer" });
  });
});

// app.listen(5000, () => console.log("server is active..."));

server.listen(5000, () => {
  console.log("Server is listening at port 5000...");
});
