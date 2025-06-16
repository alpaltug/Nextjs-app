import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDao from "./dao/reviewsDAO.js";    // data access object

import dotenv from "dotenv";
dotenv.config();

const MongoClient = mongodb.MongoClient;
const mongo_username = process.env['MONGO_USERNAME'];
const mongo_password = process.env['MONGO_PASSWORD'];
const uri = `mongodb+srv://${mongo_username}:${mongo_password}@cluster0.nngoysm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`


// select port 8000 for the "backend" server
const port = 8000;


// connect to the MongoDb client (after that the server starts listening on the port defined above)
MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,    // max allowed connection at a time
        wtimeoutMS: 2500,   // max allowed connection time before timeout
        useNewUrlParser: true   // to use their custom parser, set to true
    }
).catch(err => {
    console.log(err.stack); // log the error stack
    process.exit(1); // ending the program
}).then(async client => {
    // connect to the db and return the db instance
    await ReviewsDao.injectDB(client);
    app.listen(port, () => {
        console.log(`Server started listening on port ${port}...`);
    })
});