// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
} from '../functions.js';

const { test, skip } = QUnit;

test('this test should pass', (expect) => {
    const expected = true;

    const actual = myFunction();

    expect.equal(actual, expected, 'true = true');
});

skip('this test should be skipped', (expect) => {
    const expected = true;

    const actual = true;

    expect.equal(actual, expected);
});

test('it should add three exclamation points', (expect) => {
    const expected = 'bunny rabbit!!!';
    const actual = addExclamationPoints('bunny rabbit');
    expect.equal(actual, expected);

    const expected2 = 'blue whale!!!';
    const actual2 = addExclamationPoints('blue whale');
    expect.equal(actual2, expected2);

    const expected3 = 'cats!!!';
    const actual3 = addExclamationPoints('cats');
    expect.equal(actual3, expected3);
});

test('it should take in a number and multiply it by 7', (expect) => {
    const expected = 14;
    const actual = multiplyBySeven(2);
    expect.equal(actual, expected);

    const expected2 = 21;
    const actual2 = multiplyBySeven(3);
    expect.equal(actual2, expected2);

    const expected3 = 28;
    const actual3 = multiplyBySeven(4);
    expect.equal(actual3, expected3);
});

test('it should take in a number and multiply it by 12 then divide it in half', (expect) => {
    const expected = 18;
    const actual = multiplyBy12ThenHalve(3);
    expect.equal(actual, expected);

    const expected2 = 24;
    const actual2 = multiplyBy12ThenHalve(4);
    expect.equal(actual2, expected2);

    const expected3 = 30;
    const actual3 = multiplyBy12ThenHalve(5);
    expect.equal(actual3, expected3);
});

test('should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected = 10;
    const actual = divideThenMultiply(8, 4, 5);
    expect.equal(actual, expected);

    const expected2 = 8;
    const actual2 = divideThenMultiply(10, 5, 4);
    expect.equal(actual2, expected2);

    const expected3 = 12;
    const actual3 = divideThenMultiply(12, 3, 3);
    expect.equal(actual3, expected3);
});
