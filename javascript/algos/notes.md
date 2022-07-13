```javascript
// A Needle in a Haystack

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i]=== 'needle') {
          return `found the needle at position ${i}`;
      }
    }
  }
```

```javascript

// If you can't sleep, just count sheep! 

var countSheep = function (num){
    if (!num) return '';
    let response = '';
    
    for (let i = 1; i <= num; i++) { 
      response += `${i} sheep...`
    }
    return response
  }


```
```javascript

//Quarter of the Year

const quarterOf = (month) => {
    //1-3 1st 4-6 2nd 7-9 3rd, 10-12 4th
    const months = {
      "1" : 1,
      "2" : 1,
      "3" : 1,
      "4" : 2,
      "5" : 2,
      "6" : 2,
      "7" : 3,
      "8" : 3,
      "9" : 3,
      "10" : 4,
      "11" : 4,
      "12" : 4,
    };
    return months [month]
  }

```
```javascript

// How good are you really?

function betterThanAverage(everyone, you) {
  let average = null
  let total = 0;
  
  for (let i = 0; i < everyone.length; i++) {
    total += everyone [i];
  }
  
  average = total/everyone.length
  
  return you > average;
}

function betterThanAverage(x,y) {
  const total = x.reduce(function (prevValue, currValue) {
    return prevValue + currValue;
    }, 0);
  const average = total/x.length;
    return y > average
}

```
```javascript
// Fake Binary

function fakeBin(x){
  const strArr = x.split('');
  const result = strArr.map(x => {
    if (x < 5) return 0;
    if (x >= 5) return 1;
  });
  return result.join('')
}
```

```javascript
// Convert number to reversed array of digits

function digitize(n) {
  const strArr = n.toString().split('').reverse();
  const result = strArr.map(item => item * 1); 
  return result
}

```

```javascript
// Use regex to validate pin number.

function validatePIN (pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}

```


```javascript
// Write a function to remove the first and last characters from a string.
function removeChar(str){
  return str.slice(1,-1)
};

```


```javascript
//Disemvowel Trolls
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  
  const stringAsArray = str.split("")
  
  for (i = 0; i < stringAsArray.length; i++) {
    if (vowels.includes(stringAsArray[i].toLowerCase())) {
      stringAsArray[i] = ""
    }
  }
  
  return stringAsArray.join("")
}

```

```javascript
// Odd or Even
function oddOrEven(array) {
  let prime = 0
   for (let i = 0 ; i < array.length; i++)
     prime += array[i];
     if (prime % 2 === 0) {
       return 'even'
     } else if (prime === 0) {
     return 'even'
     } else { 
       return 'odd'
     }
}


```
```javascript
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter (digit => {
      if (typeof digit === 'number' || digit === 0)
        return true
    })
  }

  function filter_list(l) {
    return l.filter(el => typeof(el) === 'number')
  }
```

```javascript
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld (x,y) {
    const y2 = y * 2;

    if (x === y2) return 0;

    if (x > y2) {
        return x - y2; 
    }
    if (x < y2) {
        return y2 -x
    }
 }
 ```

 ```javascript
 //  Write a function that will check if two given characters are the same case.
 function sameCase(a, b){
 //97-122 lowercase characters 65-90 uppercase characters  
  const _a = a.charCodeAt();
  const _b = b.charCodeAt();
  
  const checkIsLetter = (x, y) => {
    return (
      ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) && 
      ((y >= 65 && y <= 90) || (y >= 97 && y <= 122))
    );
  };
  
  const isLetter = checkIsLetter(_a, _b)
  
  const checkIsMatch = (x,y) => {
    return (
      (x >= 65 && x <= 90 && y >= 65 && y <= 90) ||
      (x >= 97 && x <= 122 && y >= 97 && y <= 122)
    )
}
  
  const isMatch =  checkIsMatch( _a, _b);

  if (!isLetter) return -1;
  if (isMatch) {
    return 1;
  } else {
    return 0;
  } 
}
 
 ```

 ```javascript
 // Create a function with two arguments that will return an array of the first (n) multiples of (x).
function countBy(x, n) {
    let z = [];
    let index = 1;
    
    while (z.length < n) {
      z.push(x * index);
      index++
    }  
    return z;
  }
//__________________________________________________________
  function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i)
      }
    return z;
  }
 ```

```javascript
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
function points(games) {
    let total = 0;
    for (let i = 0; i < games.length; i++) {
        const [x, y] = games[i].split(':');
        if(x > y) total += 3;
        if (x < y) total += 0;
        if (x === y) total += 1;
    }
    return total; 
}
 ```

 ```javascript 
// Reverse Words
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

function reverseWords(str) {
  return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
}
 ```