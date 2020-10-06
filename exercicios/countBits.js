var countBits = function(n) {
    var sum = 0;
    if(n >= 0){
        const output = (n*1).toString(2);
        for(var i = 0; i < output.length ; i++){
            if(output[i] == 1){
                sum = sum +1;
            }
        }
    }
    return sum;
};


console.log(countBits(7));