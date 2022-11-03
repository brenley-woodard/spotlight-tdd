// IMPORT MODULES under test here:
import { addExclamationPoints, myFunction } from '../functions.js';

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
