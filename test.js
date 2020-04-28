
const companies = [
    { name: 'bishal', category: 'finance', start: 1939, end: 2020 },
    { name: 'shah', category: 'finance', start: 1990, end: 2020 },
    { name: 'company one', category: 'education', start: 2015, end: 2020 },
    { name: 'company two', category: 'retail', start: 1999, end: 2020 },
    { name: 'company three', category: 'retail', start: 1954, end: 2020 },

];

const ages = [33, 21, 34, 54, 1, 45, 23, 76, 5, 78];

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])
// }
// companies.forEach((company) => {
//     console.log(company.name);


// });

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 28) {
//         canDrink.push(ages[i])
//     }

// }
// console.log(canDrink)


// const canDrink = ages.filter((age) => age >= 25).map((age) =>
//     age >= 45);

// console.log(canDrink);




// filter retail company
// const filtered = companies.filter(compnay => {
//     return ((compnay.end - compnay.start) >= 10);
// });
// const filtered = companies.map(el => {
//     if (el.category === 'retail') {
//         return el;
//     }

// });


// console.log(filtered)


// create array of company name

// const companyNames = companies.map((company) => company.name);

// const testMap = companies.map((company, i) => {
//     return company;
// });
// console.log(testMap)

// const valueAge = ages.map(age =>
//     age * age
// )

// console.log(valueAge)

// const valueDouble = ages.map(age => `age is : ${age * 3}`);
// console.log(valueDouble);


// const squareDouble = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 10);
// console.log(squareDouble)

// const sortedCompanies = companies.sort((a, b) => {
//     if (a.start > b.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a, b) =>
//     (a > b ? 1 : -1));
// console.log(sortedAges)


// let age = 0;
// for (let i = 0; i < ages.length; i++) {
//     age = age + ages[i];
// }
// console.log(age);
// let output = 0;
// const sumAge = ages.forEach(age => {
//     output = output + age;


// });
// console.log(output)


// const ageSum = ages.reduce((total, age) => {
//     return total + age;
// }, 0);
// console.log(ageSum)


// reduce method 

// total age for all company 

// const totalAge = companies.reduce((acc, cur) => {

//     return (acc + (cur.end - cur.start));

// }, 0);

// console.log(totalAge)



// combine method

const combined = ages
    .map(age => age * 2)
    .filter((age) => age > 43)
    .sort((a, b) => (a > b ? 1 : -1))
    .reduce((acc, cur) => (acc += cur));





console.log(combined)