El servidor al que esta conectado es un servidor mysql llamado chating

la tabla a la que se conecta es chats

Creacion de tabla:

    CREATE TABLE chats (
        id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único para cada registro
        numRoom VARCHAR(255) NOT NULL UNIQUE,    -- Número o nombre de la sala, debe ser único
        mensajes JSON NOT NULL                   -- Historial de mensajes almacenado en formato JSON
    );


para cargar correctamente los archivos haga npm install tanto en la carpeta server como en la chat-react
y a la hora de inicializar los dos archivos estos se hacen con npm start y se recomienda iniciar primero el server.


despues al iniciar la pagina le pedira un nombre y room
en el noombre ponga el que usted quiera pero en room tiene que recordar poner el mismo tanto en un chat como el otro
o sino creara otra room distinta.

![image](https://github.com/user-attachments/assets/4f54c5f9-bf2e-4ac2-a4c6-246e3af7c739)
