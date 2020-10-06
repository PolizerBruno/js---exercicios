function highAndLow(numbers){
  var array = [];
  array = numbers.split(" ");
  let max = (Math.max.apply(Math, array));
  let min = (Math.min.apply(Math, array));

  return max +' '+ min;
}


console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));