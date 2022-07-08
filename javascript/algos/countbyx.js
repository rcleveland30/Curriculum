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