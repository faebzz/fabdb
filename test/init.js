const expect  = require("chai").expect;
const fs = require("fs");
const FabDb = require("../src/index");
describe("Initialize Database", () => {
  it("Creates new database", () => {
    var db1 = new FabDb("test");
    expect(db1.name).to.equal("test");
  });
  it("Check if .db file exists", () => {
    var db1 = new FabDb("test");
    expect(fs.existsSync(`${db1.name}.db`)).to.equal(true);
  });
});
