import React, { useState } from 'react';

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculateSumOfPrimes(limit) {
    console.log(`Calculating sum of primes up to ${limit}...`); 
    let sum = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

function NoUseMemo() {
    const [count, setCount] = useState(0);
    const [primeLimit, setPrimeLimit] = useState(1000); 

    
    const sumOfPrimes = calculateSumOfPrimes(primeLimit);

    return (
        <div>
            <h1>Performance Demo</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)}>Increment Count</button>

            <hr />

            <p>Prime Limit: {primeLimit}</p>
            <button onClick={() => setPrimeLimit(prev => prev + 100)}>Increase Prime Limit</button>

            <p>Sum of primes up to {primeLimit}: {sumOfPrimes}</p>
        </div>
    );
}

export default NoUseMemo;