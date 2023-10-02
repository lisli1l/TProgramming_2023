function productFib(prod) {
    return fib(0, 1, prod);
  }
  
  function fib(a, b, prod) {
    if (a * b < prod) {
      return fib(b, a + b, prod);
    } else if (a * b == prod) {
      return [a, b, true];
    } else {
      return [a, b, false];
    }
  }
  console.log(productFib(4895));