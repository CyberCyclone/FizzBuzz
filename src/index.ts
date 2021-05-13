interface FizzBuzzResult {
    'index': number,
    'value': string | number
}

export async function runFizzBuzz(length: Number): Promise<FizzBuzzResult[]> {
    if(!length) throw new Error('length must be a number');

    let results: FizzBuzzResult[] = [];
    for(let i = 1; i <= length; i++){
        let val: FizzBuzzResult = {
            index: i,
            value: ''
        }
        if(i % 3 === 0){
            val.value = 'Fizz';
        }
        if(i % 5 === 0){
            val.value += 'Buzz';
        } 
        if(val.value === '') {
            val.value = i;
        }
        results.push(val);
    }
    return results;
}

(async () => {
    let results = await runFizzBuzz(100);
    // console.log("Results", results);
    return results;
})();