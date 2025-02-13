"use strict";

const express = require("express");

const filesController = require("../controllers/files-controller");

const router = express.Router();

router.post("/upload-file", filesController.postUploadFile);

router.get("/download-file/:file-name", filesController.getDownloadFile);

module.exports = router;
