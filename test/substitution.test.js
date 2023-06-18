const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution() submission tests", () => {
    describe("error handling", () => {
        it("should return false if the substitution alphabet is missing", () => {
            const message = "message";
            actual = substitution(message);
            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet is not exactly 26 characters", () => {
            const message = "message";
            const alphabet = "ryan";
            actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
        it("should return false if the substitution alphabet does not contain unique characters", () => {
            const message = "message";
            const alphabet = "hhjklmnopqrstuvwxyzabcdefg";
            actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        });
    });
    describe("encoing a message", () => {
        it("should encode a message by using the given substitution alphabet", () => {
            const message = "ryan";
            const alphabet = "hijklmnopqrstuvwxyzabcdefg";
            const expected = "yfhu";
            const actual = substitution(message, alphabet);
            expect(expected).to.equal(actual);
        });
        it("should preserve spaces", () => {
            const message = "aaa bbb"
            const alphabet = "hijklmnopqrstuvwxyzabcdefg";
            const expected = "hhh iii"
            const actual = substitution(message, alphabet);
            expect(expected).to.equal(actual);
        });
    });
    describe("decoding a message", () => {
        it("should decode a message by using the given substitution alphabet", () => {
            const message = "yfhu";
            const alphabet = "hijklmnopqrstuvwxyzabcdefg";
            const expected = "ryan";
            const actual = substitution(message, alphabet, encode = false);
            expect(expected).to.equal(actual);
        });
    })
});