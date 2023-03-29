const express = require("express");

const PORT = 8082;

const app = express(); //하나의 application

app.get("/",(req, res) => {
    res.send("도커 실행.^^");
});

app.listen(PORT);
console.log("Server in running...");