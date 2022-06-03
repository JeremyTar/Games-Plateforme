"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express()
    .use(express.json());
app.listen(3000, () => {
    return console.log('My Node App listening on port 3000');
});
