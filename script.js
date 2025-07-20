function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function sumOdd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

function processArray(numbers) {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
    const maxNumber = Math.max(...numbers);
    const positiveNumbers = numbers.filter((num) => num > 0);

    console.log("Các số chẵn:", evenNumbers);
    console.log("Số lớn nhất:", maxNumber);
    console.log("Mảng các số > 0:", positiveNumbers);
}
