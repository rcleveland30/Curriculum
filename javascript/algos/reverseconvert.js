function digitize(n) {
    const strArr = n.toString().split('').reverse();
    const result = strArr.map(item => item * 1); 
    return result
  }