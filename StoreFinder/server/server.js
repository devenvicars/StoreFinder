import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import stores from './routes/store.route.js';

const app = express();
app.use(express.json(), cors());
dotenv.config();
const PORT = process.env.PORT;
dbConnect();

app.use('/api/stores', stores);

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT} 👂`)
);