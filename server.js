"use strict";

const express = require("express");

// routers
const filesRouter = require("./routes/files-router");

const app = express();
const PORT = 5000;

// enable API router
app.use("/api", filesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);    
});
