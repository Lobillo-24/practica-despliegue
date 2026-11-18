const test = require("node:test");
const assert = require("node:assert");
const { sumar, restar, dividir } = require("../src/calculadora");

test("sumar 2 + 3 da 5", () => {
    assert.strictEqual(sumar(2, 3), 5);
});

test("restar 5 - 3 da 2", () => {
    assert.strictEqual(restar(5, 3), 2);
});

test("dividir entre 0 da error", () => {
    assert.throws(() => dividir(4, 0));
});