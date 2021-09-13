//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

function findShort(s){
  let s1=s.split(' ')
  let shorts=s1[0]
  for(let i=0; i<s1.length; i++){
    if(shorts.length > s1[i].length){
      shorts = s1[i]
    }
   }
  return shorts.length
}

//best solution

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}



