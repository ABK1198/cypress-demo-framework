//Hooks are from mocha

/*
    order:
    1- before -> Executed once, as soon as the first TestScript is executed
    2- beforeEach -> Executed before EACH TestScript 
    3- testExecution
    4- afterEach -> Executed after EACH TestScript
    5- after -> Executed once, as soon as the last TestScript
*/

describe("Hook demo", function () {
  it("TC # 1", function () {
    console.log("TC # 1");
  });

  it("TC # 2", function () {
    console.log("TC # 2");
  });

  it("TC # 3", function () {
    console.log("TC # 3");
  });
});
