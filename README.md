# Webhook para signbox

## Procedimiento para levantamiento del WS
    1. Instalar las dependencias de node
        npm install
    
    2. Ejecutar el comando en la terminal estando en la raiz del proyecto, este crea un tunel para recibir los mensajes del proceso de firma. Copiar la URL publica que aparece en terminal y colocarla en el campo urlback desde postman.
        node localtunelback.js

    2. Ejecutar el comando en otra terminal estando en la raiz del proyecto, este crea un tunel para recibir el archivo firmado. Copiar la URL publica que aparece en terminal y colocarla en el campo url_out desde postman.
        node localtunelout.js

    3. Levantar los siguientes proxies para redireccionar la data que entra por cada tunel a nuestro servicio local, ejecutando los siguientes comandos, cada comando debera ser ejecutado en diferente terminal.
        node proxiback.js

        node proxiout.js
    
    4. Levantar el endpoint que recibe de manera local la data que entra por cada tunel. Este debera ser ejecutado en una terminal diferente.
        npm run dev

    5. Los mensajes provenientes de urlback y url_out se pueden visualizar mediante la terminal donde se ejecuto npm run dev. El archivo en formato PDF se almacena en la carpeta signboxfiles, esta se encuentra en la raiz del proyecto.


    
    
        