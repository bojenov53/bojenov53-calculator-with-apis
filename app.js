import express from 'express';
import bodyParser from 'body-parser';
import calculatorRoutes from './routes/calculatorRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
