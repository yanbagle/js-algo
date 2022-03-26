console.log('number: ' + 2); // 'number: 2'
console.log('number: ' + 2 + 5); // 'number: 25'
console.log('1' + 2); // '12'
console.log(3 + 2); // 5
console.log( '' + 3 + 2); // '32'
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

// Arrow functions and function declarations / expressions are not equivalent and cannot be replaced blindly.
//     If the function you want to replace does not use this, arguments and is not called with new, then yes.
// https://stackoverflow.com/questions/34361379/arrow-function-vs-function-declaration-expressions-are-they-equivalent-exch

// About this in JS
// https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch1.md
//
// To learn this, you first have to learn what this is not, despite any assumptions or misconceptions that may lead you down those paths. this is neither a reference to the function itself, nor is it a reference to the function's lexical scope.
//
// this is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.

// Determining the this binding for an executing function requires finding the direct call-site of that function. Once examined, four rules can be applied to the call-site, in this order of precedence:
//
//     Called with new? Use the newly constructed object.
//
//     Called with call or apply (or bind)? Use the specified object.
//
//     Called with a context object owning the call? Use that context object.
//
//     Default: undefined in strict mode, global object otherwise.
//
//     Be careful of accidental/unintentional invoking of the default binding rule. In cases where you want to "safely" ignore a this binding, a "DMZ" object like ø = Object.create(null) is a good placeholder value that protects the global object from unintended side-effects.
//
//     Instead of the four standard binding rules, ES6 arrow-functions use lexical scoping for this binding, which means they adopt the this binding (whatever it is) from its enclosing function call. They are essentially a syntactic replacement of self = this in pre-ES6 coding.

// This data variable is a global variable​
var data = [
	{name:"Samantha", age:12},
	{name:"Alexis", age:14}
]
​
var user = {
    // local data variable​
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
    ​
        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
​
}
​
// Assign the showData method of the user object to a variable​
var showDataVar = user.showData;
​showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​

// To fix 
// Bind the showData method to the user object​
var showDataVar = user.showData.bind (user);
​
// Now the we get the value from the user object because the this keyword is bound to the user object​
showDataVar (); // P. Mickelson 43​

//////////////////////////////////////////////////////////////////////////////////////////