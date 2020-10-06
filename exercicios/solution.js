function solution(number){
    var array = [];
    var sum = 0;
    var limit = number-1;
    while(limit > 0){
        if(limit % 3 == 0 || limit % 5 == 0){
            array.push(limit);
        }
        limit = limit -1;
    }
    array.forEach(function(element){
        sum = sum + element;
    });
    return sum;
}

console.log(solution(10));