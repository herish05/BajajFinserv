export function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) arr[i] = arr[i - 1] + arr[i - 2];
  return arr.slice(0, n);
}

export function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export function findPrimes(arr) {
  return arr.filter(isPrime);
}

export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function findHCF(arr) {
  return arr.reduce((a, b) => gcd(a, b));
}

export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

export function findLCM(arr) {
  return arr.reduce((a, b) => lcm(a, b));
}


