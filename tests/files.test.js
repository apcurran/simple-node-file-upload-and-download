"use strict";

const express = require("express");
const request = require("supertest");
const { describe, it } = require("node:test");

const filesRouter = require("../routes/files-router");

const app = express();

// setup to use JSON parsing
app.use(express.json());
// router middleware
app.use("/api", filesRouter);

describe("Files routes integration tests", () => {
    it("GET /api/files -- should return a list of all uploaded files in the file-uploads dir", () => {
        
    });
});
