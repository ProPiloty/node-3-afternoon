require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const prod_ctrl = require('./controllers/products_controller');

const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
    .then(database => {
        app.set('db', database);
        console.log('Database Connection Online');
        app.listen(SERVER_PORT, () => {
            console.log(`Server is listening on port ${SERVER_PORT}`);
        });
    })
    .catch(err => console.log(err));


app.get('/api/products', prod_ctrl.getAll);
app.get('/api/products/:id', prod_ctrl.getOne);
app.put('/api/products/:id?desc=...', prod_ctrl.update);
app.post('/api/products', prod_ctrl.create);
app.delete('/api/products/:id', prod_ctrl.delete);
