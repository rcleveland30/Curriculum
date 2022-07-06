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