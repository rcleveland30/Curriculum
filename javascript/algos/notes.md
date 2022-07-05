```
// A Needle in a Haystack

function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i]=== 'needle') {
          return `found the needle at position ${i}`;
      }
    }
  }


```

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
```
function betterThanAverage(x,y) {
  const total = x.reduce(function (prevValue, currValue) {
    return prevValue + currValue;
    }, 0);
  const average = total/x.length;
    return y > average
}


```
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

// Convert number to reversed array of digits

function digitize(n) {
  const strArr = n.toString().split('').reverse();
  const result = strArr.map(item => item * 1); 
  return result
}

```