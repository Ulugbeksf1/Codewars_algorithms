/*

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
  let sn=numbers.split(" ");
  for (item in sn) {
    result.push(parseInt(sn[item]))
  }
 let minn = result[0];
  let maxx = result[0];
  let start = result.slice(1)
  for (item in start){
    if (minn>start[item])
     { minn = start[item]}
    if (maxx<start[item])
      {maxx = start[item]}
  }
  return maxx.toString()+" "+minn.toString()
 }












