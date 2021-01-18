const supertest = require("supertest");
const app = require("../app");

const request = supertest(app.callback());

describe("routes", () => {
  it(" GET /", () => {
    return request.get("/").expect(200);
  });
});
