El servidor al que esta conectado es un servidor mysql llamado chating

la tabla a la que se conecta es chats

Creacion de tabla:

    CREATE TABLE chats (
        id INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único para cada registro
        numRoom VARCHAR(255) NOT NULL UNIQUE,    -- Número o nombre de la sala, debe ser único
        mensajes JSON NOT NULL                   -- Historial de mensajes almacenado en formato JSON
    );

![image](https://github.com/user-attachments/assets/f4f6165c-1229-4782-8031-8489d2ddc922)


para cargar correctamente los archivos haga npm install tanto en la carpeta server como en la chat-react
y a la hora de inicializar los dos archivos estos se hacen con npm start y se recomienda iniciar primero el server.

Tambien recuerde tener El xampp inicializado sino sera imposible conectarse al MySQL


despues al iniciar la pagina le pedira un nombre y room
en el noombre ponga el que usted quiera pero en room tiene que recordar poner el mismo tanto en un chat como el otro
o sino creara otra room distinta.

![image](https://github.com/user-attachments/assets/4f54c5f9-bf2e-4ac2-a4c6-246e3af7c739)
![image](https://github.com/user-attachments/assets/c7489f05-3f61-45ba-b37a-490df2df6498)
![image](https://github.com/user-attachments/assets/24fb77a5-ef18-47f7-8bbc-0a54579b46e2)


Si elige otro solamente podra comunicarse si otra persona entra en un room con su mismo numero de rrom

![image](https://github.com/user-attachments/assets/a7f1a908-a24d-4e4b-a509-7212d812aaea)
![image](https://github.com/user-attachments/assets/85da3408-2caf-439a-a80e-f5e223ed0e58)



