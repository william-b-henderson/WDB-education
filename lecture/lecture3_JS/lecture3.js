let name = "door";
let year = 2021;
let isRed = true;
let brand = null;

// let x = "hello" + "hello";
// console.log(x);


time();

function time() {
    let time = 21;
    if (time < 10) {
        greeting = "good morning";
    } else if (time < 20) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    console.log(greeting);
    return greeting;
}

let addThenMultipy = (n1, n2) => {
    return ((n+1 + n2) * n2);
}

let shortAddThenMultiply = (n1, n2) => (n1 = n2) * n2;

function even_odd(number) {
    return number % 2 == 0 ? console.log("Even") : console.log("Odd");
}

let fruits = ["apple", "orange", "banana"];
fruits[2]; //banana
fruits.length //3
fruits.push("lemon");

const me = {
    name: {
        first: 'William',
        last: 'Henderson'
    },
    location: {
        city: 'Berkeley',
        state: 'CA',
        country: 'USA'
    },
    favFruits: ['apple', 'orange', 'banana'],
};

const dog = {
    name: 'dog',
    speak() {
        console.log('woof woof');
    }
};

dog.speak()

let selection = "name";
console.log(me.name.first);
console.log(me[selection]['last']);
console.log(me['favFruits'][0])

const alex = {
    name: 'alex wu',
    class: 'cs61c'
};

let updateClass = people => {
    people.class = 'cs169'
}
updateClass(alex);
console.log(alex.class)