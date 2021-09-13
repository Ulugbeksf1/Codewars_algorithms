/*
You like building blocks. You especially like building blocks that are squares.
And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle!
Those blasted things! If you just had a way to know, 
whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is
*/



let isSquare = function(n){
  if (n==0) return true;
  let half=n/(n**(1/2));
  if((n/half)%1==0){
    return true;
  }else{
  
  return false; // fix me
}
  }

// best case
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}





