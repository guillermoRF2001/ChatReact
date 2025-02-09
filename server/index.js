const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mysql = require("mysql2");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "chating",
});

db.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL.");
});

io.on("connection", (socket) => {
  console.log("🔵 Un usuario se ha conectado:", socket.id);

  socket.on("join_room", ({ room, usuario }) => {
    console.log(`🟢 Usuario ${usuario} se unió a la sala ${room}`);
    socket.join(room);

    // Verificar si la sala existe, si no, crearla
    const query = `SELECT mensajes FROM chats WHERE numRoom = ?`;
    db.query(query, [room], (err, results) => {
      if (err) {
        console.error("❌ Error al cargar el historial:", err);
        return;
      }
      
      let historial = results.length ? JSON.parse(results[0].mensajes) : [];
      if (!results.length) {
        const insertQuery = `INSERT INTO chats (numRoom, mensajes) VALUES (?, ?)`;
        db.query(insertQuery, [room, JSON.stringify([])], (err) => {
          if (err) {
            console.error("❌ Error al crear la sala:", err);
            return;
          }
          console.log(`✅ Sala ${room} creada en la base de datos.`);
        });
      }
      
      socket.emit("chat_history", historial);
    });
  });

  socket.on("chat_message", ({ room, usuario, texto }) => {
    console.log(`💬 Mensaje en sala ${room} de usuario ${usuario}: ${texto}`);
    
    // Recuperar historial actual
    const query = `SELECT mensajes FROM chats WHERE numRoom = ?`;
    db.query(query, [room], (err, results) => {
      if (err) {
        console.error("❌ Error al cargar el historial:", err);
        return;
      }
      
      let historial = results.length ? JSON.parse(results[0].mensajes) : [];
      historial.push({ usuario, texto });

      // Actualizar historial en la base de datos
      const updateQuery = `UPDATE chats SET mensajes = ? WHERE numRoom = ?`;
      db.query(updateQuery, [JSON.stringify(historial), room], (err) => {
        if (err) {
          console.error("❌ Error al actualizar el mensaje:", err);
          return;
        }
        
        io.to(room).emit("chat_message", { usuario, texto });
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("🔴 Un usuario se ha desconectado:", socket.id);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
