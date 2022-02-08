let findSumOfTwo = function(A, val) {
  let i = 0;
  let j = A.length - 1;
  
  while (i < j) {
    let s = A[i] + A[j];
    if (s === val) {
      return true;
    }

    if (s < val) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

let v = [1, 3, 4, 5, 7, 14, 15]
let test = [3, 20, 1, 2, 7]

for (i = 0; i < test.length; i++) {
  let output = findSumOfTwo(v, test[i]);
  console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
