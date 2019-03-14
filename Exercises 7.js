function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var i = 0;
    var space = ' ';
    var count1 = 0;
    var count2 = 0;
    while (i < kalimat.length){
        if (i == 0){
            count1 = count1 +1;
        }
        else if (kalimat[i-1] == space){
            count2 = count2 + 1;
        }
        i++
  }
  return count1+count2;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5