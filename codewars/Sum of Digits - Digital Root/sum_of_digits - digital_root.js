function digitalRoot(n){
    let x = String(n);
    var sum = 0;
      for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]);
      }
    if (String(sum).length !== 1){
      return digitalRoot(sum);
    }else{
      return sum;
    }
  }