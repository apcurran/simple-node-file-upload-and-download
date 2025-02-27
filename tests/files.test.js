"use strict";

const express = require("express");
const request = require("supertest");
const { describe, it } = require("node:test");
const assert = require("assert");

const filesRouter = require("../routes/files-router");

const app = express();

// setup to use JSON parsing
app.use(express.json());
// router middleware
app.use("/api", filesRouter);

describe("GET /api/files", () => {
    it("respond with a JSON list of all uploaded files in the file-uploads dir", (done) => {
        request(app)
            .get("/api/files")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((response) => {
                assert.ok(Array.isArray(response.body), "Response should be an array");
            })
            .expect(200, done);
    });
});
