function xo(str) {
    // you can only write your code here!
    var i = 0;
    var x = '';
    var o = '';

while(i < str.length){
    if(str.charAt(i) == 'x'){
        x += 1;
    }
    else if(str.charAt(i) == 'o'){
        o += 1;
    }
    i++
    }
    if(x.length == o.length){
        return 'true';
    } 
    else{
        return 'false';
    }
}

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true