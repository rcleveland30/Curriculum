// If you can't sleep, just count sheep! 

var countSheep = function (num){
    if (!num) return '';
    let response = '';
    
    for (let i = 1; i <= num; i++) { 
      response += `${i} sheep...`
    }
    return response
  }