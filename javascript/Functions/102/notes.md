# JavaScript Functions 102
## An arrow function expression is more conscise than the tradition function expression.  However, ther are caveats(not discussed here).

### Advantages (not a complete list)

The 'function' keyword is replaced with '=>'
```javascript
const somefn = function() {
    return 'Hello world'
};

const somefn = () => {
    return 'Hello World'
};
```

The curly braces and the 'return' keyword can be removed entirely if everything can fit on one line.
```javascript

const somefn = function() {
    return 'Hello world';
};

const somefn = () => 'Hello World';
```

You can remove parentheses if there is only one argument.
```javascript
// one argument
const greeting = function (name){
    return `Hello ${name}`
};

const greeting = name => `Hello ${name}`;

// more than one argument
const locatin = function(city,state) {
    return `The location is ${city}, ${state}`;
}

const location (city, state) => `The location is ${city}, ${state}`;

```

A 'return' that spans multiple lines can either use an explicit 'return', with curly braces, or an implicit 'return', with parentheses.
```javascript
const studentDetails = function () {
    return {
        name: 'Angela',
        age 16,
        grade: 91,
    }
};

//explicit
const studentDetails = () => {
    return {
        name: 'Angela',
        age 16,
        grade: 91,
    }
};

//implicit
const studentDetails = () => (
    { //no return keyword
        name: 'Angela',
        age 16,
        grade: 91,
    }
);