// https://projecteuler.net/problem=3

function largest_prime_factor() {
    const limit = 600_851_475_143;
    let result = 0

    if (isPrime(limit)) {
        return limit
    }

    for (let i = 1; i <= limit; i++) {
        if (limit % i === 0 && isPrime(i)) {
            if (i > result) {
                result = i;
            }
        }
    }
    return result
}

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

console.log(largest_prime_factor())