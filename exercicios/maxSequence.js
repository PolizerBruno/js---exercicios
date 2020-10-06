function maxSequence(arr){
    var maxSum = 0;
    for(var i = 0; i <= arr.length; i++){
        var sum = 0;
        var loop = i;
        sum = sum + arr[i];
        while(arr.length -1 >= loop){
            if(sum > maxSum && sum >0){
                maxSum = sum;
            }
            loop++;
            sum = sum + arr[loop];
        }
    };
    if(maxSum > 0){
      console.log(arr)
        return maxSum
    }else{
       console.log(arr)
        return 0;
    }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))