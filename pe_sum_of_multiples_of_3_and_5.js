// https://projecteuler.net/problem=1

function sum_of_multiples_of_3_and_5() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum
}

console.log(sum_of_multiples_of_3_and_5())