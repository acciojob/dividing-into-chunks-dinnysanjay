const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let temp = [];
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(sum + arr[i] > n){
      result.push(temp);
      temp = [arr[i]];
      sum = arr[i];
    } else {
      temp.push(arr[i]);
      sum += arr[i];
    }
  }
  
  if(temp.length > 0){
    result.push(temp);
  }
  
  return result;
};

console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5));
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
