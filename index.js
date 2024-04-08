const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(morgan('tiny'));
app.use(express.raw({ type: '*/*', limit: '100mb'}));


app.get('/*', (req, res) => {
    res.status(200);
    res.send({ success: true });
})

app.post('/urlback', (req, res) => {
    res.status(200);
    console.log(req.body.toString()); // Muestra el cuerpo de la solicitud como texto sin procesar
    res.send(req.body);
})

app.post('/urlout', (req, res) => {
    const pdfData = req.body;

    const dirPath = './signboxfiles';
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    const fileName = `${Date.now()}.pdf`;
    const filePath = `${dirPath}/${fileName}`;

    fs.writeFileSync(filePath, pdfData);
    console.log(`Archivo PDF guardado como ${fileName}`);
    res.send(`Archivo PDF guardado como ${fileName}`);
    // res.send(`Archivo PDF guardado como`);
})

app.listen(port, () =>
    console.log(`Ejemplo de webhook escuchando en el puerto ${port}`)
)