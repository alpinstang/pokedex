const app = require("../app");
const request = require("supertest");
const { assert } = require("chai");
const { after } = require("mocha");

// make sure we close the server.
after(function (done) {
  app.close();
  done();
});

describe("GET /", function () {
  it("Health Check", (done) => {
    request(app).get("/").expect(200).end(done);
  });
});

describe("GET /api/v1/pokemon", function () {
  it("API", (done) => {
    request(app)
      .get("/api/v1/pokemon")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect((res) => {
        assert.equal(
          res.body.status,
          "success",
          "Expected success in json response"
        );
      })
      .end(done);
  });
});
