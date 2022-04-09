const express = require("express");

// App
const app = express();

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

app.use('/', []);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));