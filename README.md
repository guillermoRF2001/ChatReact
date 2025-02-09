El servidor al que esta conectado es un servidor mysql llamado chating

la tabla a la que se conecta es chats

Creacion de tabla:
CREATE TABLE chats (
    id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único para cada registro
    numRoom VARCHAR(255) NOT NULL UNIQUE,    -- Número o nombre de la sala, debe ser único
    mensajes JSON NOT NULL                   -- Historial de mensajes almacenado en formato JSON
);
