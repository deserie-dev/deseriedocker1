const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (_, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/docker-picture", (_, res) => {
	let img = fs.readFileSync(path.join(__dirname, "images/docker.png"));
	res.writeHead(200, { "Content-Type": "image/png" });
	res.end(img, "binary");
});


app.listen(3000, () => console.log("'deseriedocker2 is ready!"));