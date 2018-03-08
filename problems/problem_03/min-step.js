const minStep = input => {
  // put your code here !!
  if(input === 1) return 0;

  if(input%2 === 0) {
    return minStep(input/2)+1
  }else {
    let x = minStep(input-1)+1
    let y = minStep(input+1)+1
    return x > y ? y:x
  }
};

console.log(minStep(3));
module.exports = { minStep };
