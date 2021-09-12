//Best practice 
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//My solution
function descendingOrder(n){

 let eN = Array.from(String(n), Number)
  console.log(eN)

let result = eN.sort().reverse().join("")
   console.log(result)
return parseInt(result)
  }





