
export function add(numbers:string){
  if(numbers === ''){
    return 0;
  }

  // if number contains atleast no comma
  if (!numbers.includes(',')) {
    return parseInt(numbers, 10);
  }

  return 0;
}