# JavaScript Data 202
## The syntax to read depends on the data type or the data collection in which data types are found

## indices
We use an index to read from an array by closing the index value between square brackets[]
```
const shoppingList = ['apples', 'celery', 'bread'];
console.log(shoppingList[0]); // ---> apples
```

### Bracket Notation - for objects

### Dot notation - for objects
```
const cars = 
    {
    color: 'green',
    mileage: 67382,
    isNew: false
  };

console.log(car['mileage']) // --> 67382
cnosole.log(car.mileage) // 67382
```

## strings, booleans, numbers
Refer to variable name to read the data
```

 const name = 'Paul';
 console.log(name); // --> Paul