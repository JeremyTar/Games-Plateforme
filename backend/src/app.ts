import * as express from 'express';
import * as mongoose from 'mongoose'


const app = express()

    .use(express.json())

app.listen(3000, () => {
    return console.log('My Node App listening on port 3000');
});