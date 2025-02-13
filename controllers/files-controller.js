"use strict";

/** @type {import("express").RequestHandler} */
async function postUploadFile(req, res, next) {
    console.log("Upload file here");
    res.end();
}

/** @type {import("express").RequestHandler} */
async function getDownloadFile(req, res, next) {
    console.log("Downloading file...");
    res.end();
}

module.exports = {
    postUploadFile,
    getDownloadFile,
};
