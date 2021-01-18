const request = require("supertest");
const assert = require("assert");
const app = require("../app");

describe("Test server is running", function () {
  afterAll(async (done) => {
    await app.close();

    app.server.stop();
    done();
  });

  it("GET / responds with 200", async () => {
    const result = await app.get("/");
    expect(result.status).toEqual(200);
  });
});
