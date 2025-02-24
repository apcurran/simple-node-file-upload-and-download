"use strict";

const express = require("express");

const filesController = require("../controllers/files-controller");
const { upload } = require("../config/multer-config");

const router = express.Router();

router.get("/files", filesController.getUploadedFiles);

// the 'name' field on the HTML form should match the upload function name
// upload func will fail without matching names
router.post("/files", upload.single("file"), filesController.postUploadFile);

router.get("/download-file/:file-name", filesController.getDownloadFile);

module.exports = router;
