const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar() submission tests", () => {
    describe("error handling", () => {
        it("should return false if the shift amount is 0", () => {
            const message = "thinkful";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        it("should return false if the shift is above 25", () => {
            const message = "thinkful";
            const shift = 26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
        it("should return false if the shift is less than -25", () => {
            const message = "thinkful";
            const shift = -26;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "thinkful";
            const shift = 3;
            const expected = "wklqnixo";
            const actual = caesar(message, shift);
            expect(expected).to.equal(actual);
        });
        it("should leave spaces and other symbols as is", () => {
            const message = "thinkful cool";
            const expected = "wklqnixo frro";
            const shift = 3;
            const actual = caesar(message, shift);
            expect(expected).to.equal(actual);
        });
        it("should ignore capital letters", () => {
            const message = "Thinkful";
            const expected = "wklqnixo";
            const shift = 3;
            const actual = caesar(message, shift);
            expect(expected).to.equal(actual);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "zebra";
            const expected = "afcsb";
            const shift = 1;
            const actual = caesar(message, shift);
            expect(expected).to.equal(actual);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const message = "abcdefg";
            const expected = "zabcdef";
            const shift = -1;
            const actual = caesar(message, shift);
            expect(expected).to.equal(actual);
        });
    });
    describe("decoding a message", () => {
        it("should decode a message by shifting the letters in the opposite direction", () => {
            const message = "wklqnixo";
            const shift = 3;
            const expected = "thinkful";                
            const actual = caesar(message, shift, false);
            expect(expected).to.equal(actual);
        });
        it("should leave spaces and other symbols as is", () => {
            const message = "wklqnixo frro";
            const shift = 3;
            const expected = "thinkful cool";
            const actual = caesar(message, shift, false);
            expect(expected).to.equal(actual);
        });
        it("should ignore capital letters", () => {
            const message = "Wklqnixo";
            const expected = "thinkful";
            const shift = 3;
            const actual = caesar(message, shift, false);
            expect(expected).to.equal(actual);
        });
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "afcsb";
            const expected = "zebra";
            const shift = 1;
            const actual = caesar(message, shift, false);
            expect(expected).to.equal(actual);
        });
        it("should allow for a negative shift that will shift to the left", () => {
            const message = "zabcdef";
            const expected = "abcdefg";
            const shift = -1;
            const actual = caesar(message, shift, false);
            expect(expected).to.equal(actual);
        });
    });
});