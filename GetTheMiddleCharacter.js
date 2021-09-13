/*You are going to be given a word. Your job is to return the
middle character of the word. If the word's length is odd, return the middle 
character. If the word's length is even, return the middle 2 characters.
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"*/
function getMiddle(s)
{
let middle = s.split('')
  let ind = middle.length
   let md=Math.floor(ind/2)
if(ind%2===0){
  return middle[md-1] + middle[md];
   }
  else{
    return middle[md]
  }
  }

