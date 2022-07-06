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
  
  