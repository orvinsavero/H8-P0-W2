function mengelompokkanAngka(arr) {
    // you can only write your code here!
    var i = 0;
    var output1 = [];
    var output2 = [];
    var output3 = [];
    var result = [];
    var l = arr.length;
    while (i < l){
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0 ){
            output1.push(arr[i]);
        }
        if (arr[i] % 3 == 0 ){
            output3.push(arr[i]);
        }
        if (arr[i] % 2 != 0 && arr[i] % 3 != 0 ){
            output2.push(arr[i]);
        }
        i++;
    }
    result.push(output1);
    result.push(output2);
    result.push(output3);
    return result;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]