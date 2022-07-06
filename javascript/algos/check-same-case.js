function sameCase(a, b){
    //97-122 lowercase characters 65-90 uppercase characters  
     const _a = a.charCodeAt();
     const _b = b.charCodeAt();
     
     const checkIsLetter = (x, y) => {
       return (
         ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)) && 
         ((y >= 65 && y <= 90) || (y >= 97 && y <= 122))
       );
     };
     
     const isLetter = checkIsLetter(_a, _b)
     
     const checkIsMatch = (x,y) => {
       return (
         (x >= 65 && x <= 90 && y >= 65 && y <= 90) ||
         (x >= 97 && x <= 122 && y >= 97 && y <= 122)
       )
   }
     
     const isMatch =  checkIsMatch( _a, _b);
   
     if (!isLetter) return -1;
     if (isMatch) {
       return 1;
     } else {
       return 0;
     } 
   }