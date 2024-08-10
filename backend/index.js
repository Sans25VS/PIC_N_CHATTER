import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Import urlencoded from express
import { urlencoded } from 'express';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Listening from the backend",
    });
});

const PORT = process.env.PORT || 3000; // Define PORT if not defined in environment variables

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
