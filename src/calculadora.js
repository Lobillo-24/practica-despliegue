/**
 * Suma dos números.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a y b
 * @example
 * sumar(2, 3); // 5
 */

function sumar(a, b) {
  return a + b;
}

/**
 * Restar dos números.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La resta de a y b
 * @example
 * restar(3, 2); // 1
 */

function restar(a, b) {
  return a - b;
}

/**
 * Dividir dos números.
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Resultado de dividir a entre b
 * @throws {Error} Si b es 0
 * @example
 * dividir(10, 5); // 2
 */

function dividir(a, b) {
  if (b === 0) {
    throw new Error("No se puede dividir entre 0");
  }
  return a / b;
}

module.exports = { sumar, restar, dividir };
