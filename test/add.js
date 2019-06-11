const expect  = require("chai").expect;
const fs = require("fs");
const FabDb = require("../src/index");
describe("Insert data to database", () => {
  it("Inserts object to log", () => {
    var db1 = new FabDb("test");
    db1.add('example', {test: 1});
    db1.add('example', {test: 2});
    db1.add('example', {test: 3});
    const data = fs.readFileSync(`${db1.name}.log`, 'utf8');
    expect(data).to.have.string((`"test":1`));
    expect(data).to.have.string(`"test":2`);
    expect(data).to.have.string(`"test":3`);
  });
});
