"use strict";

const path = require("path");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "..", "file-uploads"),
    filename: function setFileName(req, file, multerCb) {
        const updatedSuffix = `${Date.now()}-${file.originalname}`;
        multerCb(null, updatedSuffix);
    },
});

const upload = multer({ storage });

module.exports = {
    upload,
};
