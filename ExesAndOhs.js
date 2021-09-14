//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

/*
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/
function XO(str) {
  let sum=0;
  let sum1=0;
    for (item in str){
      if (str[item].toLowerCase()==="x" ) {sum++}
      if( str[item].toLowerCase()==='o') {sum1++}
    }
return sum===sum1;

    }


//best solution
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
