console.log('number: ' + 2); // number: 2
console.log('number: ' + 2 + 5); // number: 25
console.log('1' + 2); // 12
console.log(3 + 2); // 5
console.log( '' + 3 + 2); // 32
console.log(3 + 2 + ' hey'); // 5 hey

//if there is a string in front, there will be no numeric operations
//if not, then the numbers will do its regular math ops 

console.log('///////////////////////////////////////////////');

function restOperator (...params) {
    console.log(params.length);
}
restOperator('1','2','3');

console.log('///////////////////////////////////////////////');

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};

let mergedObj =  {...obj1, ...obj2};
console.log(mergedObj);

console.log('///////////////////////////////////////////////');

var add = function(x) {
    return function(y) { return x + y; };
}

var a = add(2)(3); //5
console.log(a);

console.log('///////////////////////////////////////////////');

let person = {name: 'a'};
let person2 = person;

person.name = 'b';

console.log(person2.name); // b

console.log('///////////////////////////////////////////////');
