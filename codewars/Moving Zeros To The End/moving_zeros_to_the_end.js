function moveZeros(arr) {
    let arr0 = [];
    let arrl = [];
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0){
        arr0.push(0);
      }else{
        arrl.push(arr[i]);
      }
    }
    let result = [...arrl, ...arr0];
    
    return result
  }