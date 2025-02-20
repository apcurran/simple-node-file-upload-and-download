"use strict";

const express = require("express");

const filesController = require("../controllers/files-controller");
const { upload } = require("../config/multer-config");

const router = express.Router();

// the 'name' field on the HTML form should match the upload function name
// upload func will fail without matching names
router.post("/upload-file", upload.single("file"), filesController.postUploadFile);

router.get("/download-file/:file-name", filesController.getDownloadFile);

module.exports = router;
