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

const myFilename = "1740435848669-my-test-doc.txt";

describe("GET /api/files", () => {
    it("respond with a JSON list of all uploaded files in the file-uploads dir", (done) => {
        request(app)
            .get("/api/files")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect((response) => {
                assert.ok(Array.isArray(response.body), "Response should be an array");
            })
            .expect(200);
    });
});

describe("POST /api/files", () => {
    it("uploads a file to the server", (done) => {
        request(app)
            .post("/api/files")
            .field("firstName", "Bob") // fake a name
            .attach(myFilename, `./fixtures/${myFilename}`) // simulate file upload
            .expect(201);
    });
});

describe("GET /api/files/:filename", () => {
    it("respond with a download of selected file", (done) => {
        request(app)
            .get(`/api/files/${myFilename}`)
            .expect(200)
            .expect("Content-Disposition", `attachment; filename="${myFilename}"`)
            .expect("Content-Type", /octet-stream/)
        ;
    });
});
