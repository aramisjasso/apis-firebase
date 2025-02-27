const express = require('express');
const app = express();
const taskRoutes = require('./routers/taskRoutes');

app.use(express.json());

app.use('/apiV1/task', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log('Servidor corriendo en puerto 3000');
});
