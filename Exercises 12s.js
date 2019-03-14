function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var i = 0;
    var l = arr.length-1;
    var result = 0;
    var result2 = 0;
    while (i < l){
        result += (arr[i+1] / arr[i])
        i++;
    }
    result2 = result / l;
    if (result2 == arr[1] / arr[0]){
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true 2 6 18 54
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false