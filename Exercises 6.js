function angkaPalindrome(num) {
    // you can only write your code here!
    num++;
    n = num.toString();
    var i = 0;
    var output ='';
    while(n[i] != n[n.length-1]){
        output = parseInt(n);
        output++
        n = output.toString();
    }
  return n;
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001