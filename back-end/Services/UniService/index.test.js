const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

// var UniService = require("./index");
// let uniData = UniService.uniData;
// const testUni = uniData[0];

// describe("uniService", function () {
//   describe("get_uni()", function () {
//     it("should return arr with one uni obj in it given valid uniID", function () {
//       const uni = UniService.get_uni(testUni.uniID);

//       expect(uni[0]).to.deep.equalInAnyOrder(testUni);
//     });
//   });
// });

// describe("uniService", function () {
//   describe("get_uniName()", function () {
//     it("should return uni with the exact name", function () {
//       const uni = UniService.get_uniName(testUni.uniID);

//       expect(uni[0]).to.deep.equalInAnyOrder(testUni);
//     });
//   });
// });

// describe("set_uniName()", function () {
//   it("Should return 0 and set user.lastName to newLastName", function () {
//     const uniName = "Ankara University";

//     expect(UniService.set_UniName(testUni.uniID, uniName)).to.be.equal(0);

//     expect(testUni.uniName).to.be.equal(uniName);
//   });
// });
