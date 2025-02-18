"use strict";

const express = require("express");

const app = express();
const PORT = 5000;

if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
}

// routers
const filesRouter = require("./routes/files-router");

// enable API router
app.use("/api", filesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);    
});
