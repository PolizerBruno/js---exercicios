function permutations(string) {
    let arrayPermutations = [];
    arrayPermutations.push(string);
    let arrayStrings = string.split('');
    for(let i = 0; i < arrayStrings.length; i++){
        letterToSubs1 = arrayStrings[i]
        for(let j = 0; j < arrayStrings.length; j++){
            if(i == j){
            }else{
                letterToSubs2 = arrayStrings[j];
                arrayStrings[i] = letterToSubs2;
                arrayStrings[j] = letterToSubs1;
                if(arrayPermutations.indexOf(arrayStrings.join('')) >= 0){

                }else{
                    arrayPermutations.push(arrayStrings.join(''))
                }
            }
            arrayStrings = string.split('').reverse();
        }
    }
    return arrayPermutations;
}
['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


console.log((permutations('aabb')));