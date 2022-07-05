//Fake Binary

function fakeBin(x){
    const strArr = x.split('');
    const result = strArr.map(x => {
      if (x < 5) return 0;
      if (x >= 5) return 1;
    });
    return result.join('')
  }