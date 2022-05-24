function findShortestStringRecursive(arr) {
  if( arr.length === 1){
  return arr[0]
  }
  
  const short = findShortestStringRecursive(arr.slice(1)) // egz 'a'
   return arr[0].length <= short.length? arr[0]: arr[0] = short
}  // egz       3            1

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
