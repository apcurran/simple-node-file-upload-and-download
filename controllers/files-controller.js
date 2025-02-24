"use strict";

/** @type {import("express").RequestHandler} */
async function getUploadedFiles(req, res, next) {
    try {
        console.log("Getting all files...");
        res.end();
        
    } catch (err) {
        next(err);
    }    
}

/** @type {import("express").RequestHandler} */
async function postUploadFile(req, res, next) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file chosen from form." });
        }
    
        res.status(201).json({
            message: "New file uploaded.",
            filename: req.file.filename,
        });
        
    } catch (err) {
        next(err);
    }
}

/** @type {import("express").RequestHandler} */
async function getDownloadFile(req, res, next) {
    console.log("Downloading file...");
    res.end();
}

module.exports = {
    getUploadedFiles,
    postUploadFile,
    getDownloadFile,
};
