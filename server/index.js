// Dependancies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// initialize express app
const app = express();

// properly send request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// enable cross origin
app.use(cors());

// Database connecion 
// TODO: PLEASE MAKE SURE YOU MOVE THIS TO A GIT IGNORED ENV FILE BEFORE DEPLOYMENT
const CONNECTION_URL = 'mongodb+srv://seley:SeleyK@cluster0.a3dmwyh.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// used for avoiding errors in the console
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUNifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT} `)))
    .catch((error) => console.log(error.message));


