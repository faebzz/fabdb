const expect  = require("chai").expect;
const fs = require("fs");
const FabDb = require("../src/index");
describe("Remove complete database Database", () => {
  it("Delete only logfile", () => {
    var db1 = new FabDb("test");
    db1.destroyLog();
    expect(fs.existsSync(`${db1.name}.db`)).to.equal(true);
    expect(fs.existsSync(`${db1.name}.log`)).to.equal(false);
  });
  it("Delete database and logfile", () => {
    var db1 = new FabDb("test");
    // db1.destroy();
    expect(fs.existsSync(`${db1.name}.db`)).to.equal(false);
    expect(fs.existsSync(`${db1.name}.log`)).to.equal(false);
  });
});
