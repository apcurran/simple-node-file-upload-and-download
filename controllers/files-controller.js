"use strict";

/** @type {import("express").RequestHandler} */
async function postUploadFile(req, res, next) {
    console.log("Upload file here");
    res.end();
}

module.exports = {
    postUploadFile,
};
