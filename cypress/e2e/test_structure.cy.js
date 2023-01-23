//Topic
// -> Describe and context
// -> It and Specify
// -> Unit testing Demo

//Dummy Application
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

//Cypress Test
//Describe - context -> Group tests, nest multiple instances.

describe("Unit testing of our dummy application", () => {
  context("Math with POSITIVE numbers", () => {
    it("should add positive numbers", () => {
      expect(add(2, 2)).to.equal(4);
    });

    it("should subtract positive numbers", () => {
        expect(subtract(4,2)).to.equal(2);
    });

    it("should divide positive numbers", () => {
        expect(divide(4,2)).to.equal(2);
    });

    it("should multiply positive numbers", () => {
        expect(multiply(4,2)).to.equal(8);
    });
  });

  describe("Math with Decimal numbers", () => {
    it("should add decimal numbers", () => {
        expect(add(2.2,2.2)).to.equal(4.4);
    });

    it("should subtract decimal numbers", () => {
        expect(subtract(4.4,2.2)).to.equal(2.2);
    });

    it("should divide decimal numbers", () => {
        expect(divide(4.0,2.0)).to.equal(2.0);
    });

    it("should multiply decimal numbers", () => {
        expect(multiply(2.2,2.2)).to.equal(4.4);
    });
  });
});
