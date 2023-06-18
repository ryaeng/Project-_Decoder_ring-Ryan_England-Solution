const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius() submission tests", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter ot number pairs", () => {
            const message = "message";
            const expected = "23513434112251";
            const actual = polybius(message);
            expect(expected).to.equal(actual)
        });
        it("should translate both 'i' and 'j' to 42", () => {
            const message = "ij";
            const expected = "4242";
            const actual = polybius(message);
            expect(expected).to.equal(actual);
        });
        it("should leave spaces as is", () => {
            const message = "i am";
            const expected = "42 1123"
            const actual = polybius(message);
            expect(expected).to.equal(actual);
        });
    });
    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const message = "23513434112251";
            const expected = "message";
            const actual = polybius(message, false);
            expect(expected).to.equal(actual);
        });
        it("should leave spaces as is", () => {
            const message = "42 1123";
            const expected = "i/j am"
            const actual = polybius(message, false);
            expect(expected).to.equal(actual);
        });
        it("should return false if the length of all numbers is odd", () => {
            const message = "123"
            const actual = polybius(message, false)
            expect(actual).to.be.false;
        });
    });
});