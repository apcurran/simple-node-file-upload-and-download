"use strict";

const express = require("express");

/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
function handleErrors(err, req, res, next) {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const message = err.message || "Server error";

    res.status(statusCode).send(`Error: ${message}`);
}

module.exports = handleErrors;
