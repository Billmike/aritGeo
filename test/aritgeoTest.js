const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const myApp = require('../src/aritgeo.js');

describe('aritGeo', function() {
    describe("Geometric Progression", () => {
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([3,9,27,81])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([5,25,125])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([4, 16, 64, 256])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([-256,-64,-16,-4])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([10,5,2.5,1.25])).to.be.equal("Geometric");
        });
        it("Should return Geometric", () => {
            expect(myApp.aritGeo([1/2, -1/4, 1/8, -1/16])).to.be.equal("Geometric");
        })
    });
    describe("Arithmetic Progression", () => {
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
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([-6,-4,-2,0,2,4,6])).to.be.equal("Arithmetic");
        });
        it("Should return Arithmetic", () => {
            expect(myApp.aritGeo([-3/2, -1/2, 1/2])).to.be.equal("Arithmetic");
        })
    });
    describe("Zero", () => {
        it("Should return empty array", () => {
            expect(myApp.aritGeo([])).to.be.equal(0);
        });
    });
    describe("Undefined", () => {
        it("Should return -1", () => {
            expect(myApp.aritGeo([2, 6, 18, 30, 54])).to.be.equal(-1);
        });
        it("Should return -1", () => {
            expect(myApp.aritGeo([100,200,250,300,400,500])).to.be.equal(-1);
        });
        it("Should return -1", () => {
            expect(myApp.aritGeo([2,4,6,8,10,15,20,30,35,40])).to.be.equal(-1);
        });
    
    });
});
