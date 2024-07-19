import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, mongoDBURL } from './config.js';
import bookRoutes from './routes/books.js';

const app = express();
app.use(express.json());
// app.use(cors())
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

// app.get('/', (req, res) => {
//     console.log(req);
//     return res.status(234).send('testingg');
// });

app.use('/api/books', bookRoutes);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to db');
        app.listen(PORT, () => console.log(`App listening on Port: ${PORT}`));
    })
    .catch((err) => console.log(err));
