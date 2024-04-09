const express = require('express');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
