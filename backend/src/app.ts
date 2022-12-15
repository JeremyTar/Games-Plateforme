import * as express from 'express';

const app: express = express()

    .use(express.json())

app.listen(3000, () => {
    return console.log('My Node App listening on port 3000');
});