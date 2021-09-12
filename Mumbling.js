//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
//This time no story, no theory. The examples below show you how to write function accum:

function accum(s) {
	// your code
  let arr=[]
  for(let i=0; i<s.length; i++){
    arr.push(format(s[i], i+1))
  }
  return arr.join('-')
 }
function format(s, num) {
  let letter = s.toUpperCase()
  while (letter.length !==num){
    letter+=s.toLowerCase()
  }
  return letter
}










