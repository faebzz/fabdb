const expect  = require("chai").expect;
const FabDb = require("../src/index");
describe("Initialize Database", () => {
  it("Creates new database", () => {
    var db1 = new FabDb("test");
    expect(db1.name).to.equal("test");
  });
});
