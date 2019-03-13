function palindrome(kata) {
    // you can only write your code here!
    var i = kata.length-1;
    var output = '';
    while(i >= 0){
        output += kata[i];
        i--
    }
    return output === kata;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false