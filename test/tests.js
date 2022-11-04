// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    divideThenMultiply,
    getSecondItem,
    getLastItem,
    makeLuckyGreeting,
    multiplyBy12ThenHalve,
    multiplyBySeven,
    myFunction,
    returnAsAnArray,
    returnAsAString,
    renderDogLI,
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

test('should take in three numbers and return those numbers in an array', (expect) => {
    const expected = [8, 4, 5];
    const actual = returnAsAnArray(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = [1, 2, 3];
    const actual2 = returnAsAnArray(1, 2, 3);
    expect.deepEqual(actual2, expected2);

    const expected3 = [2, 3, 4];
    const actual3 = returnAsAnArray(2, 3, 4);
    expect.deepEqual(actual3, expected3);
});

test('should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected = '845';
    const actual = returnAsAString(8, 4, 5);
    expect.deepEqual(actual, expected);

    const expected2 = '123';
    const actual2 = returnAsAString(1, 2, 3);
    expect.deepEqual(actual2, expected2);

    const expected3 = '234';
    const actual3 = returnAsAString(2, 3, 4);
    expect.deepEqual(actual3, expected3);
});

test("should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number", (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12';
    const actual = makeLuckyGreeting(8, 4);
    expect.equal(actual, expected);

    const expected2 = 'Hello! Your lucky number for the day is 14';
    const actual2 = makeLuckyGreeting(7, 7);
    expect.equal(actual2, expected2);

    const expected3 = 'Hello! Your lucky number for the day is 16';
    const actual3 = makeLuckyGreeting(8, 8);
    expect.equal(actual3, expected3);
});

test('should take an array and return the second item in the array', (expect) => {
    const expected = 'apple';
    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(actual, expected);

    const expected2 = 'kiwi';
    const actual2 = getSecondItem(['apple', 'kiwi', 'orange', 'plum']);
    expect.equal(actual2, expected2);

    const expected3 = 'orange';
    const actual3 = getSecondItem(['kiwi', 'orange', 'apple', 'plum']);
    expect.equal(actual3, expected3);
});

test("should take an array and return the LAST item in the array, no matter the array's length", (expect) => {
    const expected = 'plum';
    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);
    expect.equal(actual, expected);

    const expected2 = 'orange';
    const actual2 = getLastItem(['apple', 'kiwi', 'plum', 'orange']);
    expect.equal(actual2, expected2);

    const expected3 = 'apple';
    const actual3 = getLastItem(['kiwi', 'orange', 'plum', 'apple']);
    expect.equal(actual3, expected3);
});

test('should take a dog object and return an <li> with the name of the dog', (expect) => {
    const expected = '<li>Benny</li>';
    const actual = renderDogLI({ name: 'Benny', age: 6 });
    expect.equal(actual, expected);

    const expected2 = '<li>Sully</li>';
    const actual2 = renderDogLI({ name: 'Sully', age: 16 });
    expect.equal(actual2, expected2);

    const expected3 = '<li>Cricket</li>';
    const actual3 = renderDogLI({ name: 'Cricket', age: 7 });
    expect.equal(actual3, expected3);
});

// test("", (expect) => {
//     const expected = ;
//     const actual = ;
//     expect.equal(actual, expected);

//     const expected2 = ;
//     const actual2 = ;
//     expect.equal(actual2, expected2);

//     const expected3 = ;
//     const actual3 = ;
//     expect.equal(actual3, expected3);
// });
