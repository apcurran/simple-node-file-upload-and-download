"use strict";

const path = require("path");
const fs = require("node:fs/promises");

/** @type {import("express").RequestHandler} */
async function getUploadedFiles(req, res, next) {
    try {
        const uploadDirPath = path.join(__dirname, "..", "file-uploads");
        const allFiles = await fs.readdir(uploadDirPath);

        res.status(200).json({ filenames: allFiles });

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
    const { filename } = req.params;
    const pathToFile = path.join(__dirname, "..", "file-uploads", filename);

    res.status(200).download(pathToFile, filename, function (err) {
        if (err) {
            next(err);
        }
    });
}

module.exports = {
    getUploadedFiles,
    postUploadFile,
    getDownloadFile,
};
