const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
const { expect } = chai;
chai.use(deepEqualInAnyOrder);

var uniService = require('./index')
let uniData = require('./../../Mock/UnisMockData/unis.json')
const testUni = uniData[0];

describe('uniService', function () {
    describe('get_uni()', function () {
        it('should return arr with one uni obj in it given valid uniID', function () {

            const uni = uniService.get_uni(testUni.uniID)

            expect(uni[0]).to.deep.equalInAnyOrder(testUni);

        });
    });
});