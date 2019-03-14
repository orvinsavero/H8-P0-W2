function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = num.toString();
    var i = 1;
    var a = '';
    var l = str.length;
    while(i < l){
        if (str[i] > str[i-1]){
            a+=str[i];
        } else{
             a+=str[i-1];
        }
        i++
    }
    var x = 1;
    var k = a.length;
    var b = '';
    while(x < k){
        if (a[x] > a[x-1]){
            b+=a[x];
        } else{
            b+=a[x-1];
        }
        x++
    }
    var y = 1;
    var n = b.length;
    var c = '';
    while(y < n){
        if (b[y] > b[y-1]){
            c+=b[y];
        } else{
            c+=b[y-1];
        }
        y++
    }
    var z = 1;
    var m = c.length;
    var d = '';
    while(z < m){
        if (c[z] > c[z-1]){
            d+=c[z];
        } else{
            d+=c[z-1];
        }
        z++
    }
    var zz = 1;
    var mm = d.length;
    var e = '';
    while(zz < mm){
        if (d[zz] > d[zz-1]){
            e+=d[zz];
        } else{
            e+=d[zz-1];
        }
        zz++
    }

    var f = e[0]
    var count = 0;
    var result ='';
    while(count < l){
        if (str[count] == f){
            result = f + str[count+1];
        }
        count++;
    }

return result;
  }

  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99