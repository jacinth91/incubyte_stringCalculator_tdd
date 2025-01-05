
export function add(numbers:string){
  if(numbers === ''){
    return 0;
  }
  let delimiter = ',';
  let value = numbers;

  //if there are custom delimiter
  if (numbers.startsWith('//')) {
    const newlineIndex = numbers.indexOf('\n');
    delimiter = numbers.substring(2, newlineIndex);
    value = numbers.substring(newlineIndex + 1);
  }

  // if number contains atleast no comma
  if (!value.includes(delimiter)) {
    return parseInt(value, 10);
  }

  const newNumbers = value.replace(/\n/g, delimiter);
  const nums = newNumbers.split(delimiter);
  let sum = 0;
  const neg:number[] = []
  for (const num of nums) {

    const  input = parseInt(num, 10);
    if(input < 0){
      neg.push(input)
    }
    sum += input
  }
  if(neg.length > 0 ){
    throw new Error(`negative numbers not allowed ${neg.join(', ')}`)
  }

  return sum;
}