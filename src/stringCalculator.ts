
export function add(numbers:string){
  if(numbers === ''){
    return 0;
  }

  // if number contains atleast no comma
  if (!numbers.includes(',')) {
    return parseInt(numbers, 10);
  }

  const nums = numbers.split(',');
  let sum = 0;
  for (const num of nums) {
    sum += parseInt(num, 10);
  }

  return sum;
}