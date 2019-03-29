function balikString(input){
    var i = input.length-1;
    var output = '';
    while(i >= 0){
        output += input[i];
        
        i--;
    }
    console.log(output);
}

balikString('hello world!')