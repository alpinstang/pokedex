const supertest = require("supertest");
const app = require("../app");

describe("int::app", function () {
  let request = null;
  let server = null;

  before(function (done) {
    server = app.listen(done);
    request = supertest.agent(server);
  });

  after(function (done) {
    server.close(done);
  });

  it("should get /", function () {
    return request.get("/").expect(200);
  });
});
