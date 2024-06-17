const express = require('express');
const cors = require('cors'); // https://expressjs.com/en/resources/middleware/cors.html
const app = express();

const dotenv = require('dotenv');
dotenv.config();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.listen(process.env.PORT, () => {
    console.log('Listening on port: ', process.env.PORT);
});


app.get('/', (req, res) => {
    res.send({message:'Holitas desde Express'});
})

app.get('/api/v1/euskoregite/:id', (req, res) => {
    // req.params recoge los datos de la url
    let id = req.params.id;
    const date = new Date();
    res.send({date: date, evaluationId: id, message:`Evaluación Euskoregite de: ${id}`});
});

// app.post('/addname', (req, res) => {
//     // req.body recoge los datos del body
//     const name = req.body.name;

//     addData(connection, name, (error, result) => {
//         if (error) {
//             console.error('Error al añadir datos:', error);
//             res.status(500).json({ data: 'Error al añadir datos', error: error });
//         } else {
//             console.log('Operación POST completada:', result);
//             res.status(200).json({ data: 'Datos añadidos correctamente (POST)', result: result });
//         }
//     });

// });