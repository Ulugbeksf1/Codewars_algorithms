
//Count the number of divisors of a non-negative integer n.

//Random tests go up to n = 500000.

function getDivisorsCnt(n){
    // todo
 let res =0;
  for(let i=0; i<=n; i++){
    if(n%i==0){
      res++;
    }
  }
  return res
}
