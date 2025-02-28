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
            filesize: `${req.file.size} bytes`,
        });

    } catch (err) {
        next(err);
    }
}

/** @type {import("express").RequestHandler} */
async function getDownloadFile(req, res, next) {
    const { filename } = req.params;
    const pathToFile = path.join(__dirname, "..", "file-uploads", filename);
    // TODO: add real-time monitoring of download progress and use human-readable filesizes (pretty-bytes or filesize libraries)

    res.status(200).download(pathToFile, filename, function (err) {
        if (err) {
            next(err);
        }
    });
}

// const { pipeline } = require("node:stream/promises");
// const standardFs = require("node:fs");
// /**
//  * @type {import("express").RequestHandler}
//  * Alternative function with Streams API instead of using the Express res.download() helper method
//  */
// async function getDownloadFile(req, res, next) {
//     const { filename } = req.params;
//     const pathToFile = path.join(__dirname, "..", "file-uploads", filename);
    
//     try {
//         const fileStats = await fs.stat(pathToFile);
//         // send filesize in response header
//         res.setHeader("Content-Length", fileStats.size);
//         // trigger download as file
//         res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
//         // generic file
//         res.setHeader("Content-Type", "application/octet-stream");

//         await pipeline(standardFs.createReadStream(pathToFile), res);

//     } catch (err) {
//         console.error("Pipeline error:", err.message);

//         next(err);
//     }
// }

module.exports = {
    getUploadedFiles,
    postUploadFile,
    getDownloadFile,
};
