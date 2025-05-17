// https://projecteuler.net/problem=2

function sum_even_fibonacci_numbers() {
    let sum = 0;
    let fib_numbers = [0, 1]
    let i = 0
    while (true) {
        const nextFib = fib_numbers[i] + fib_numbers[i + 1];

        fib_numbers.push(nextFib);

        if (nextFib > 4_000_000) {
            break
        }

        if (nextFib % 2 === 0) {
            sum += nextFib;
        }

        i++
    }
    return sum
}

console.log(sum_even_fibonacci_numbers())