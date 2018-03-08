const maxFloor = input => {
  // put your code here !!
  let i = 1;
  for(i; i < input-i; i++) {
    input -= i;
  }
  return i
};

console.log(maxFloor(5))

module.exports = { maxFloor };
