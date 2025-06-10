// Import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');
const { euro } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test(`One euro should be ${euro.USD} dollars`, function() {

    const euroAmount = 1;
    const dollars = fromEuroToDollar(euroAmount);

    const expected = euro.USD*euroAmount; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test(`One euro should be ${euro.JPY} yen`, function() {

    const euroAmount = 1;
    const dollars = fromEuroToDollar(euroAmount);
    const yen = fromDollarToYen(dollars);
 
    const expected = euro.JPY*euroAmount; 
    
    // This is the comparison for the unit test
     expect(yen).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test(`One euro should be ${euro.GBP} british pounds`, function() {

    const euroAmount = 1;
    const dollars = fromEuroToDollar(euroAmount);
    const yen = fromDollarToYen(dollars);
    const pounds = fromYenToPound(yen);
    
    const expected = euro.GBP; 
    
    // This is the comparison for the unit test
     expect(pounds).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});