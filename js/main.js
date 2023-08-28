                                                                    //CodeWARS!

// Sun Aug 27, 2023

//Task: 
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

//Code:

//Solution 1
function XO(str) {
    let xCount = 0;
    let oCount = 0;
  
    let xoArr = str.split('')
    
    xoArr.forEach(item => {
      if (item.toLowerCase() === "x"){
        xCount++;
      }else if (item.toLowerCase() === "o"){
        oCount++;
      }
      }); return xCount === oCount;
  };

//Solution 2
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
     return (x && x.length) === (o && o.length);
   }
