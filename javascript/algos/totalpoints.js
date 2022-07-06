function points(games) {
    let total = 0
    for (let i = 0; i < games.length; i++) {
        const [x, y] = games[i].split(':');
        if(x > y) total += 3;
        if (x < y) total += 0;
        if (x === y) total += 1;
    }
    return total; 
}