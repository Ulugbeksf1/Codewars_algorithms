// Hoare’s algorithm
// Below partition is Hoare's algorithm.
let partition = function(arr, low, high) {
  let pivotValue = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (i <= high && arr[i] <= pivotValue) {
      i++;
    }

    while (arr[j] > pivotValue) {
      j--;
    }

    if (i < j) {
      // swap arr[i], arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    } 
  }

  arr[low] = arr[j];
  arr[j] = pivotValue;

  // return the pivot index
  return j;
};

let quickSortRec = function(a, low, high) {
  if (high > low) {
    let pivotIndex = partition(a, low, high);
    quickSortRec(a, low, pivotIndex - 1);
    quickSortRec(a, pivotIndex + 1, high);
  }
};

let quickSort = function(a) {
  quickSortRec(a, 0, a.length - 1);
};

let a = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3]

console.log("Before Sorting")
console.log(a);

quickSort(a);

console.log("After Sorting")
console.log(a);
