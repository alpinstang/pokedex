const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("GET /", function () {
  it("responds with 200", function (done) {
    request(app).get("/").expect(200, done);
  });
});
