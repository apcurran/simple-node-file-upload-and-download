"use strict";

const express = require("express");
// routers
const filesRouter = require("./routes/files-router");
const handleErrors = require("./middleware/error-handler");

const app = express();
const PORT = 5000;

if (process.env.NODE_ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("dev"));
}

// middleware for JSON parsing of incoming req bodies
app.use(express.json());

// enable API router
app.use("/api", filesRouter);

// final catch-all error handler
app.use(handleErrors);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);    
});
