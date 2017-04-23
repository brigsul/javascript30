// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const filteredInvetors = inventors.filter(function(inv) {
    return inv.year >= 1500 && inv.year < 1600;
});

console.log(filteredInvetors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const namesOfInventors = inventors.map(function(inv) {
    return inv.first + " " + inv.last;
});

console.log(namesOfInventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort(function(a, b) {
    return a.year - b.year;
});

console.log(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalAge = inventors.reduce(function(allInv, inv) {
    var age = inv.passed - inv.year;
    console.log(age);
    allInv += age;
    return allInv;
}, 0);

console.log(totalAge);
// 5. Sort the inventors by years lived
const ageSortedInventors = inventors.sort(function(a, b) {
    var ageA = a.passed - a.year;
    var ageB = b.passed - b.year;
    return ageA - ageB;
});

console.log(ageSortedInventors);

// 6. create a list of Bouleconstds in Paris that contain 'de' anywhere in the name
// performed on https://en.wikipedia.org/wiki/Category:Bouleconstds_in_Paris in dev tools console
// .mw-category-group ul li a.textContent();

const allStreets = Array.from(document.querySelectorAll(".mw-category-group a"));

const deStreets = allStreets
    .map(street => street.textContent)
    .filter(deStreet => deStreet.includes('de'));

console.log(deStreets);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(people.sort());

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const dataCounts = data.reduce(function(allModes, mode) {
    if (mode in allModes) {
        allModes[mode]++;
    } else {
        allModes[mode] = 1;
    }
    return allModes;
}, {});

console.log(dataCounts);