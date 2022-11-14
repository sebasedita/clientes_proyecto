const express = require('express');
const { getConnection } = require('./db/db-connection-mongo');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());

getConnection();

// Parseo JSON
app.use(express.json());

app.use('/inventario', require('./routes/validar_proyecto'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});