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