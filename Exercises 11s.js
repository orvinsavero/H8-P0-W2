function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var i = 0;
    var l = arr.length-1;
    var result = 0;
    var result2 = 0;
    while (i < l){
        result += (arr[i+1] - arr[i]);
        i++;
    }
    result2 = result / l;
    if(result2 === (arr[1] - arr[0])){
        return true
    } else{
        return false
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false

