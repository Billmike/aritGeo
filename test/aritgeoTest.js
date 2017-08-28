const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const myApp = require('../src/aritgeo.js');

describe('aritGeo', function() {
    describe("Geometric Pogression", () => {
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([3,9,27,71])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([5,25,125])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([4, 16, 64, 256])).to.be.equal("Geometric");
        });
    });
    describe("Arithmetic progression", () => {
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([3,6,9,12,15])).to.be.equal("Arithmetic");
        });
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([2,4,6,8,10])).to.be.equal("Arithmetic");
        });
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([10,20,30,40,50])).to.be.equal("Arithmetic");
        });
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([100,200,300,400,500])).to.be.equal("Arithmetic");
        });
    });
    describe("Zero", () => {
        it("Should return empty array", () => {
            expect(myApp.aritGeo([])).to.be.equal(0);
        });
    });
    describe("Undefined", () => {
        it("Should return -1", () => {
            expect(myApp.aritGeo([23,54,655,765])).to.be.equal(-1);
        });
        it("Should return -1", () => {
            expect(myApp.aritGeo([233,55,695,765])).to.be.equal(-1);
            assert.equal(myApp.aritGeo([233,55,695,765]), -1);
        });
    
    });
});
