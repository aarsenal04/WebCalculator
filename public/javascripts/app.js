const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configura la aplicación
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Agrega rutas a la aplicación
app.get('/', (req, res) => {
    res.render('index');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = Number(num1) + Number(num2);
    res.send({ resultado });
});

app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = Number(num1) - Number(num2);
    res.send({ resultado });
});

app.post('/multiplicar', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = Number(num1) * Number(num2);
    res.send({ resultado });
});

app.post('/dividir', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === '0') {
        res.status(400).send({ error: 'No se puede dividir entre cero' });
    } else {
        const resultado = Number(num1) / Number(num2);
        res.send({ resultado });
    }
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
