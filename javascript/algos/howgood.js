// How good are you really?
```
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
```
function betterThanAverage(x,y) {
const total = x.reduce(function (prevValue, currValue) {
    return prevValue + currValue;
    }, 0);
const average = total/x.length;
    return y > average
}
```