function deepCount(arr) {
    let result = arr.length;
    for (const element of arr) {
      if (Array.isArray(element)) {
        result += deepCount(element);
      }
    };
    return result;
  }