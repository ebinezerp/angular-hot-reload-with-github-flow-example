const express = require("express");

const app = express();


app.use(express.json());

app.get("/api/hello", (req,res,next) => {
    return res.send({
        'data':'Hello'
    });
})

app.get("/", (req,res,next) => {
    return res.send("BACKEND-APP");
})

app.listen(8080)