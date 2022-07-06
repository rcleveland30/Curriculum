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