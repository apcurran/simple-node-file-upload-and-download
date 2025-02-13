"use strict";

const express = require("express");

const filesController = require("../controllers/files-controller");

const router = express.Router();

router.post("/upload-file", filesController.postUploadFile);

module.exports = router;
